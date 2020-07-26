import { Component, OnInit } from '@angular/core';
import { ShortQuestionsService } from '../../../allServices/short-questions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shortitem',
  templateUrl: './shortitem.component.html',
  styleUrls: ['./shortitem.component.scss'],
})
export class ShortitemComponent implements OnInit {
  fetching = false;
  squestion: any = [];
  pageid:any;
  count:any;
  short_question:boolean = false;
  constructor(private _squestion: ShortQuestionsService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this._squestion.getshortquestions(id,'').pipe().subscribe(response=>{
      
      const data = JSON.stringify(response[1].result);
      this.squestion = JSON.parse(data);
      this.pageid = response[0].link;
      this.count = response[0].count;
      this.fetching = false;
     
    });
  }
  
  toggleAccordian(event, index) {
    var element = event.target.parentElement;
    console.log(element);
    element.classList.toggle("active");
    if(this.squestion[index].isActive) {
      this.squestion[index].isActive = false;
    } else {
      this.squestion[index].isActive = true;
    }      
    var details_back = element.nextElementSibling;
    if (details_back.style.maxHeight) {
      details_back.style.maxHeight = null;
    } else {
      details_back.style.maxHeight = details_back.scrollHeight + "px";
    }
  }

}
