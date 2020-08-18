import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-short-question-listing',
  templateUrl: './short-question-listing.page.html',
  styleUrls: ['./short-question-listing.page.scss'],
})
export class ShortQuestionListingPage implements OnInit {
   data:any;
  title:string = "Short Question";
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get('https://avatto.in/wp-json/avatto/v2/short-question-title/'+pid).subscribe(res=>{
      this.data = JSON.stringify(res);
      this.data = JSON.parse(this.data);
      this.title = this.data.title;
    }) 

}

}
