import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShortQuestionDetailsService } from '../../allServices/short-question-details.service';
@Component({
  selector: 'app-short-question-details',
  templateUrl: './short-question-details.component.html',
  styleUrls: ['./short-question-details.component.scss'],
})
export class ShortQuestionDetailsComponent implements OnInit {
  fetching = false;
  sqdata: any;
  //expanded: boolean = true;
  //plus: boolean = false;
  constructor(private _shtdets:ShortQuestionDetailsService,private route: ActivatedRoute,private router:Router,private storage: Storage,private http:HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;
    this._shtdets.getShortQuestionDetails(id).pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.sqdata = response;
      console.log(this.sqdata);
      this.fetching = false;
    });
  }

  /*accordion(){
    this.expanded=!this.expanded;
    this.plus=!this.plus;
  }*/

  toggleAccordian(event, index) {
    var element = event.target.parentElement;
    console.log(element);
    element.classList.toggle("active");
    if(this.sqdata[index].isActive) {
      this.sqdata[index].isActive = false;
    } else {
      this.sqdata[index].isActive = true;
    }      
    var details_back = element.nextElementSibling;
    if (details_back.style.maxHeight) {
      details_back.style.maxHeight = null;
    } else {
      details_back.style.maxHeight = details_back.scrollHeight + "px";
    }
  }

}
