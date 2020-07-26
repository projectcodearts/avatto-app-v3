import { Component, OnInit } from '@angular/core';
import { MocktestService } from 'src/app/allServices/mocktest.service';

@Component({
  selector: 'app-all-mocktest',
  templateUrl: './all-mocktest.component.html',
  styleUrls: ['./all-mocktest.component.scss'],
})
export class AllMocktestComponent implements OnInit {

  fetching = true;
  title: string = "Mock Test";
  mocktest: any;
  constructor(private _mocktest: MocktestService) { }
  
  ngOnInit() {
    this.fetching = true;
    this.mocktest=this._mocktest.getmocktest();
    this.fetching = false;
  }

}
