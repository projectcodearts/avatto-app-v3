import { Component, OnInit } from '@angular/core';
import { QuizserviceService } from 'src/app/allServices/quizservice.service';

@Component({
  selector: 'app-quiz-main',
  templateUrl: './quiz-main.component.html',
  styleUrls: ['./quiz-main.component.scss'],
})
export class QuizMainComponent implements OnInit {

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
