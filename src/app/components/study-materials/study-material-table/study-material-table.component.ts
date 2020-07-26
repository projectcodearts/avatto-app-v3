import { Component, OnInit } from '@angular/core';
import { StudyMaterialService } from '../../../allServices/study-material.service';

@Component({
  selector: 'app-study-material-table',
  templateUrl: './study-material-table.component.html',
  styleUrls: ['./study-material-table.component.scss'],
})
export class StudyMaterialTableComponent implements OnInit {

  tabledata: any;
  constructor(private _testtable: StudyMaterialService) { }

  ngOnInit() {
    this.tabledata=this._testtable.getmstudymaterialtabledata();
  }

}
