import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuizListingService } from '../../allServices/quiz-listing.service';
@Component({
  selector: 'app-practice-quiz-listing',
  templateUrl: './practice-quiz-listing.component.html',
  styleUrls: ['./practice-quiz-listing.component.scss'],
})
export class PracticeQuizListingComponent implements OnInit {
  fetching = false;
  practiceQs:any=[];

  constructor(private _practiceqsdts:QuizListingService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;
    this._practiceqsdts.getQuizListing(id).pipe().subscribe(response=>{
      console.log(response);
      this.practiceQs = response;
      if(this.practiceQs.length == 0){
        console.log('no response');
        this.router.navigate(['/quiz', id]);
      }
      this.fetching = false;
    })
  }
  toggleAccordian(event, index) {
    var element = event.target.parentElement;
    element.classList.toggle("active");
    if(this.practiceQs[index].isActive) {
      this.practiceQs[index].isActive = false;
    } else {
      this.practiceQs[index].isActive = true;
    }      
    var details_back = element.nextElementSibling;
    if (details_back.style.maxHeight) {
      details_back.style.maxHeight = null;
    } else {
      details_back.style.maxHeight = details_back.scrollHeight + "px";
    }
  }

}
