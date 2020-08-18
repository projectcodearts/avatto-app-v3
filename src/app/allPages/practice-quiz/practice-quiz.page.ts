import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-practice-quiz',
  templateUrl: './practice-quiz.page.html',
  styleUrls: ['./practice-quiz.page.scss'],
})
export class PracticeQuizPage implements OnInit {
  data:any;
  title:string = "Practice Quiz";
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    let pid = this.route.snapshot.paramMap.get('id');
    this.httpClient.get('https://avatto.in/wp-json/avatto/v2/quiz-title/'+pid).subscribe(res=>{
      this.data = JSON.stringify(res);
      this.data = JSON.parse(this.data);
      this.title = this.data.title;
    }) 
  }

}
