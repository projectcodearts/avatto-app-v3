import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-quiz-main-page',
  templateUrl: './quiz-main-page.page.html',
  styleUrls: ['./quiz-main-page.page.scss'],
})
export class QuizMainPagePage implements OnInit {
  backButtonSubscription;
  title:string = "Quiz";
  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  

}
