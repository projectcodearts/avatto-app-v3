import { Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  backButtonSubscription;
  title:string = "Quiz";
  data:any;
  constructor(private platform: Platform,private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {

    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get('https://avatto.in/wp-json/avatto/v2/quiz-title/'+pid).subscribe(res=>{
      this.data = JSON.stringify(res);
      this.data = JSON.parse(this.data);
      this.title = this.data.title;
    }) 

  }
  
  ionViewDidLeave(){
    console.log('page leave')
    //localStorage.clear();
    //localStorage.removeItem("question");
  }
  ngAfterViewInit() { 
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }
  ngOnDestroy() { 
    this.backButtonSubscription.unsubscribe();
  }
  
}
