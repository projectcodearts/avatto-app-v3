import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from '../../../allServices/quizservice.service';

@Component({
  selector: 'app-all-quiz',
  templateUrl: './all-quiz.component.html',
  styleUrls: ['./all-quiz.component.scss'],
})
export class AllQuizComponent implements OnInit {

  fetching = false;
  title: string = "Quiz";
  quiz: any;
  constructor(private _quiz: QuizserviceService) { }

  ngOnInit() {
    this.fetching = true;
    this.quiz=this._quiz.getquizdata();
    this.fetching = false;
  }

}
