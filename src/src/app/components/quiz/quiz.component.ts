import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from '../../allServices/quizservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  fetching = false;
  title: string = "Quiz";
  quiz: any;
  fquiz: any = []; 
  constructor(private _quiz: QuizserviceService) { }

  ngOnInit() {
    this.fetching = true;
    this._quiz.getquizdata().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.fquiz = JSON.parse(data);
      this.fetching = false;
    })
    
  }

}

