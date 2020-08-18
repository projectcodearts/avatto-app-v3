import { Component, OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  backButtonSubscription;
  title:string = "Quiz";
  constructor(private platform: Platform) { }

  ngOnInit() {

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
