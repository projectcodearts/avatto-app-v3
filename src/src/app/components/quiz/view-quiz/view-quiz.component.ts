import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Platform, LoadingController, AlertController,ToastController,ModalController } from '@ionic/angular';
import { QuizService } from '../../../allServices/quiz.service'
import { Router,ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { QuizInstructionPage } from '../../../allPages/quiz-instruction/quiz-instruction.page';
@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss'],
})
export class ViewQuizComponent implements OnInit {
  @ViewChild('coundown') coundown: ElementRef;
  @ViewChild('submitQuizId') submitQuizId: ElementRef;
  @ViewChild('myDivElementRef') myDivElementRef: ElementRef;
  fetching = false;
  active:boolean = false;
  interval: any;
  timeout: any;
  startQz : any = '';
  timer : any = '';
  nextBtnActive : any = "false";
  questionList : any = JSON.parse(localStorage.getItem("question"))?JSON.parse(localStorage.getItem("question")):[];
  lStart : any = parseInt(localStorage.getItem('lStart'))?parseInt(localStorage.getItem('lStart')):0;
  lEnd : any = parseInt(localStorage.getItem('lEnd'))?parseInt(localStorage.getItem('lEnd')):this.lStart + 1;
  buttonValue = 0;
  postAns : any = JSON.parse(localStorage.getItem("postAns"))?JSON.parse(localStorage.getItem("postAns")):{};
  questionNum : any = 'question_num_tal saveActivated';
  constructor(
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public quiz: QuizService,
    private el: ElementRef,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private storage: Storage
  ) { 
    this.storage.get('userInfo').then((val) => {
      let userInfo = JSON.parse(val);
      console.log(userInfo);
      if(!userInfo){
        this.router.navigate(['/sign-in',{"routeParams":"quiz","id":this.route.snapshot.paramMap.get('id')}]); 
      }
    });
  }

  ngOnInit() {
    this.fetching=true;
    setTimeout(() => {
      this.active=true;
      this.fetching=false;
    }, 1500);
    
  }


  async presentModal() {
    let id = this.route.snapshot.paramMap.get('id');
    const modal = await this.modalController.create({
      component: QuizInstructionPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        pid:id,
        
     },
      presentingElement: await this.modalController.getTop() // Get the top-most ion-modal
    });

    modal.onDidDismiss().then((data) => {
      this.startQuiz();
    });

    return await modal.present();
  }

  async startQuiz(){
    let id = this.route.snapshot.paramMap.get('id');
    let loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    loading.present();
    this.quiz.getQuestions(id).then(data => {
      this.storage.set("questions_data",data);
      loading.dismiss();
      let item = data[0];
      this.timer = item['time_of_quiz'];
      localStorage.setItem("totalTime",item['time_of_quiz']);
      localStorage.setItem("question",JSON.stringify(item.question));
      this.questionList = JSON.parse(localStorage.getItem("question"));
      this.startQz = "quiz started";
      this.startTimer(this.timer);
    });
    /*if(this.questionList.length <= 0){
      let loading = await this.loadingCtrl.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
      });
      loading.present();
      this.quiz.getQuestions(id).then(data => {
        loading.dismiss();
        let item = data[0];
        this.timer = item['time_of_quiz'];
        localStorage.setItem("totalTime",item['time_of_quiz']);
        localStorage.setItem("question",JSON.stringify(item.question));
        this.questionList = JSON.parse(localStorage.getItem("question"));
        this.startQz = "quiz started";
        this.startTimer(this.timer);
      });
    }  else {
      var i = 0;
      this.timer = localStorage.getItem('timer')
      this.startQz = "quiz started";
      this.startTimer(this.timer);
      this.timeout = setTimeout(() => {
        for(var key in this.postAns){
            let className = ".questionNum"+i;
            const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className);
            if(this.postAns[key]['markReviewd'] == 'true'){
                this.renderer.setStyle(
                btnElement,
                'background-color',
                '#ec4908'
                );
            }else if(this.postAns[key]['markReviewd'] == 'false'){
                this.renderer.setStyle(
                btnElement,
                'background-color',
                '#59ad19'
                );
            }else {
                this.renderer.setStyle(
                btnElement,
                'background-color',
                '#7c58b8'
                );
            }
            i++;
        }
    }, 100);      
    } */
  }

  prevQuestion(){
    if(this.lEnd > 1){
      this.lEnd = parseInt(this.lEnd) - 1;
      this.lStart = parseInt(this.lEnd) - 1;
      localStorage.setItem('lStart',this.lStart);
      localStorage.setItem('lEnd',this.lEnd);
      this.buttonValue = 0;
      this.nextBtnActive = "false";
    }
  }

  gotoQuestionNo(questionId,qsNo){
    this.lStart = qsNo;
    this.lEnd = parseInt(qsNo)+1;
    if(this.postAns[qsNo]){
      this.buttonValue = this.postAns[qsNo]['choice'];
    }
    let i = 0;
    while(i<=qsNo){     
      if(!this.postAns[i]){
        let className = ".questionNum"+i;
        const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className); 
        this.renderer.setStyle(
          btnElement,
          'background-color',
          '#EC1707'
        );
      }
      i++;
    }
  }

  selectAnswer(params, questionId,rightChoice,selector){
    let qsAns = {};
    qsAns['choice'] = params;
    qsAns['id'] = questionId;
    qsAns['rightChoice'] = rightChoice;
    this.postAns[selector] = qsAns;
    localStorage.setItem("postAns",JSON.stringify(this.postAns));
    this.buttonValue = params;
    this.nextBtnActive = "true";
  }

  nextQuestion(questionId,params : number){
    let className = '';
    if(this.lStart < this.questionList.length-1){
      className = ".questionNum"+params;
      this.postAns[params]['markReviewd'] = "false";
      localStorage.setItem("postAns",JSON.stringify(this.postAns));
      this.lStart = params + 1;
      this.lEnd = this.lStart + 1;
      this.buttonValue = 0;
      localStorage.setItem('lStart',this.lStart);
      localStorage.setItem('lEnd',this.lEnd);
      this.nextBtnActive = "false";    
    } else {
      className = ".questionNum"+this.lStart;
    }
    
    const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className);
    this.renderer.setStyle(
      btnElement,
      'background-color',
      '#59ad19'
    );
  }

  markQuestion(questionId,params: number){
    let className = '';
    if(this.lStart < this.questionList.length-1){   
      className = ".questionNum"+params;  
      this.lStart = params + 1;
      this.lEnd = this.lStart + 1;
      this.buttonValue = 0;
      localStorage.setItem('lStart',this.lStart);
      localStorage.setItem('lEnd',this.lEnd);
      this.nextBtnActive = "false"; 
    } else {
      className = ".questionNum"+this.lStart;
    }   
    const btnElement = (<HTMLElement>this.el.nativeElement).querySelector(className);
    if(this.postAns[params]){
      this.postAns[params]['markReviewd'] = "true";
      localStorage.setItem("postAns",JSON.stringify(this.postAns));
      this.renderer.setStyle(
        btnElement,
        'background-color',
        '#ec4908'
      );
    } else {
      let qsAns = {};
      qsAns['markReviewd'] = "notanswerd";
      qsAns['id'] = questionId;
      this.postAns[params] = qsAns;
      localStorage.setItem("postAns",JSON.stringify(this.postAns));
      this.renderer.setStyle(
        btnElement,
        'background-color',
        '#7c58b8'
      );
    }
  }

  async confirmSubmitQuiz(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are you Sure you want to finish!',
      message: 'Your marks will be calculated base on your parformance in the test.',
      buttons: [
        {
          text: 'Resume',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Finish',
          handler: () => {
            this.submitQuiz();
          }
        }
      ]
    });

    await alert.present();
  }

  async submitQuiz(){
    clearInterval(this.interval);
    let loading = await this.loadingCtrl.create({
			cssClass: 'my-custom-class',
			message: 'Please wait...',
		});
    loading.present();
    const ansSheet = {};
    ansSheet['ansSheet'] = this.postAns;
    this.quiz.submitQuiz(ansSheet).subscribe(async (resp) => {
        loading.dismiss();	
        this.questionList = [];
        const toast = await this.toastCtrl.create({
            message: 'Answer has been submitted.',
            duration: 2000
        });
        toast.present();
        this.router.navigate(['/result']) 
    }, async (err) => {
        loading.dismiss();		
        const toast = await this.toastCtrl.create({
            message: 'failed to submmit quiz.',
            duration: 2000
        });
        toast.present();
    });
  }

  startTimer(duration) {
    var timer = duration, minutes, seconds;
    let coundownHtml = this.coundown;
    this.interval = setInterval(() => {
        minutes = parseInt(timer) / parseInt("60", 10);
        seconds = parseInt(timer) % parseInt("60", 10);

        minutes = Math.floor(minutes) < 10 ? "0" + Math.floor(minutes) : Math.floor(minutes);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        coundownHtml.nativeElement.innerHTML = Math.floor(minutes) + ":" + seconds;
        localStorage.setItem('timer',timer);
        console.log(parseInt(localStorage.getItem('timer')));
        if (--timer < 0) {
            timer = duration;
            this.submitQuiz();
            clearInterval(this.interval);
        } 
      
    }, 1000);
  }

  

}