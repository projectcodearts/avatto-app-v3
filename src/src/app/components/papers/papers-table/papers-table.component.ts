import { Component, OnInit } from '@angular/core';
import { PapersService } from 'src/app/allServices/papers.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-papers-table',
  templateUrl: './papers-table.component.html',
  styleUrls: ['./papers-table.component.scss'],
})
export class PapersTableComponent implements OnInit {
  fetching = false;
  papersaccordion: boolean = false;
  active: boolean= false;
  tabledata: any;
  constructor(private _testtable: PapersService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetching=true;
    let id = this.route.snapshot.paramMap.get('id');
    this._testtable.getmpaperstabledata(id,'').pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.tabledata = JSON.parse(data);
      this.fetching=false;
    });

    
    
  }
  acco(){
    this.papersaccordion=!this.papersaccordion;
    this.active=!this.active;
  }

}
