import { Component, OnInit } from '@angular/core';
import { PracticeQuizService } from '../../allServices/practice-quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-practice-quiz',
  templateUrl: './practice-quiz.component.html',
  styleUrls: ['./practice-quiz.component.scss'],
})
export class PracticeQuizComponent implements OnInit {
  fetching = false;
  quizdata: any;
  constructor(private _subcatquiz: PracticeQuizService,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;

    this._subcatquiz.getQuizdata(id,'').pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.quizdata = JSON.parse(data);
      this.fetching = false;
    });
    
  }

}
