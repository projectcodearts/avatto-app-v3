import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-details-page',
  templateUrl: './search-result-details-page.page.html',
  styleUrls: ['./search-result-details-page.page.scss'],
})
export class SearchResultDetailsPagePage implements OnInit {

  title: string = "Search Result";
  constructor() { }

  ngOnInit() {
  }

}
