import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-short-question-detail',
  templateUrl: './short-question-detail.page.html',
  styleUrls: ['./short-question-detail.page.scss'],
})
export class ShortQuestionDetailPage implements OnInit {
  data:any;
  title:string = "Short Question";
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get('https://avatto.in/wp-json/avatto/v2/short-question-details-title/'+pid).subscribe(res=>{
      this.data = JSON.stringify(res);
      this.data = JSON.parse(this.data);
      this.title = this.data.title;
    }) 
  }

}
