import { Component, OnInit } from '@angular/core';
import { SearchResultService } from 'src/app/allServices/search-result.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search-result-details',
  templateUrl: './search-result-details.component.html',
  styleUrls: ['./search-result-details.component.scss'],
})
export class SearchResultDetailsComponent implements OnInit {

  searchresult: any;
  fetching:any ='true';
  constructor(private _sec: SearchResultService,private router: Router,private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    
    let pid = this._activatedRoute.snapshot.params.id;
    this._sec.getsearchData(pid).pipe().subscribe(response=>{
      console.log(response);
      const data = JSON.stringify(response)
      this.searchresult = JSON.parse(data);
      this.fetching = false;
      console.log(this.searchresult);
    });
    
  }

}
