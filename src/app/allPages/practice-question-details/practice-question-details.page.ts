import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-question-details',
  templateUrl: './practice-question-details.page.html',
  styleUrls: ['./practice-question-details.page.scss'],
})
export class PracticeQuestionDetailsPage implements OnInit {

  title:string = "Practice Question";
  constructor() { }

  ngOnInit() {
  }

}
