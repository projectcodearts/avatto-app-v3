import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.page.html',
  styleUrls: ['./search-result-page.page.scss'],
})
export class SearchResultPagePage implements OnInit {

  title: string = "Search Not Found";
  constructor() { }

  ngOnInit() {
  }

}
