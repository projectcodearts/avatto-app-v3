import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-question-detail',
  templateUrl: './short-question-detail.page.html',
  styleUrls: ['./short-question-detail.page.scss'],
})
export class ShortQuestionDetailPage implements OnInit {

  title:string = "Short Question";
  constructor() { }

  ngOnInit() {
  }

}
