import { Component, OnInit } from '@angular/core';
import { PracticeQuestionService } from '../../allServices/practice-question.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-practice-question',
  templateUrl: './practice-question.component.html',
  styleUrls: ['./practice-question.component.scss'],
})
export class PracticeQuestionComponent implements OnInit {
  fetching = false;
  pqdata: any;
  constructor(private _subcatquestion: PracticeQuestionService,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;
    this._subcatquestion.getPQSdata(id,'').pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.pqdata = response;
      this.fetching = false;
      
    });
    
  }


}
