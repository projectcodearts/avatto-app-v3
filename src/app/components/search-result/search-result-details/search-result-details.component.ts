import { Component, OnInit } from '@angular/core';
import { SearchResultService } from 'src/app/allServices/search-result.service';

@Component({
  selector: 'app-search-result-details',
  templateUrl: './search-result-details.component.html',
  styleUrls: ['./search-result-details.component.scss'],
})
export class SearchResultDetailsComponent implements OnInit {

  searchresult: any;
  constructor(private _sec: SearchResultService) { }

  ngOnInit() {
    this.searchresult=this._sec.getsearchData();
  }

}
