import { Component, OnInit } from '@angular/core';
import { MocktestService } from 'src/app/allServices/mocktest.service';

@Component({
  selector: 'app-mocktest-table',
  templateUrl: './mocktest-table.component.html',
  styleUrls: ['./mocktest-table.component.scss'],
})
export class MocktestTableComponent implements OnInit {

  tabledata: any;
  constructor(private _testtable: MocktestService) { }

  ngOnInit() {
    this.tabledata=this._testtable.getmocktesttabledata();
  }

}
