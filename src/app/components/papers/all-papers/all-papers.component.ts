import { Component, OnInit } from '@angular/core';
import { PapersService } from 'src/app/allServices/papers.service';

@Component({
  selector: 'app-all-papers',
  templateUrl: './all-papers.component.html',
  styleUrls: ['./all-papers.component.scss'],
})
export class AllPapersComponent implements OnInit {

  fetching = false;
  title: string = "Previous Year Papers";
  papers: any;
  constructor(private _papers: PapersService) { }
  ngOnInit() {
    this.fetching = true;
    this._papers.getpapers().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.papers = JSON.parse(data);
      this.fetching = false;
    });
  }

}
