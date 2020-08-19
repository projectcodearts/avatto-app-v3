import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.page.html',
  styleUrls: ['./quiz-page.page.scss'],
})
export class QuizPagePage implements OnInit {

  title:string = "Quiz";
  constructor() { }

  ngOnInit() {
  }

}
