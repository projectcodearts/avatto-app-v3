import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-practice-question-details',
  templateUrl: './practice-question-details.page.html',
  styleUrls: ['./practice-question-details.page.scss'],
})
export class PracticeQuestionDetailsPage implements OnInit {

  title:string;
  data:any;
  constructor(private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    let pid = this.route.snapshot.paramMap.get('id');
    this.http.get('https://avatto.in/wp-json/avatto/v2/cat-title/'+pid).subscribe(res=>{
      this.data = JSON.stringify(res);
      this.data = JSON.parse(this.data);
      this.title = this.data.title;
    })
  }

}
