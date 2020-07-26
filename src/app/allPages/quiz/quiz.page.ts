import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  
  title:string = "Quiz";
  constructor() { }

  ngOnInit() {

  }
  
  ionViewDidLeave(){
    console.log('page leave')
    localStorage.clear();
    //localStorage.removeItem("question");
  }
  
}
