import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-main-page',
  templateUrl: './quiz-main-page.page.html',
  styleUrls: ['./quiz-main-page.page.scss'],
})
export class QuizMainPagePage implements OnInit {
  title:string = "Quiz";
  constructor() { }

  ngOnInit() {
  }

}
