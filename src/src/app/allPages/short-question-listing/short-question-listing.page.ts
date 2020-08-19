import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-question-listing',
  templateUrl: './short-question-listing.page.html',
  styleUrls: ['./short-question-listing.page.scss'],
})
export class ShortQuestionListingPage implements OnInit {

  title:string = "Short Question";
  constructor() { }

  ngOnInit() {
  }

}
