import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { QuizListingService } from '../../allServices/quiz-listing.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-practice-quiz-listing',
  templateUrl: './practice-quiz-listing.component.html',
  styleUrls: ['./practice-quiz-listing.component.scss'],
})
export class PracticeQuizListingComponent implements OnInit {
  fetching = false;
  practiceQs:any=[];
  percentage : any = [];
  percentageBar : any = [];
  constructor(private _practiceqsdts:QuizListingService,private storage: Storage,private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetching = true;
    this._practiceqsdts.getQuizListing(id).pipe().subscribe(response=>{
      console.log(response);
      this.practiceQs = response;

      let count_post = {};
      let count_postPercentage = {};
      this.practiceQs.forEach(async element => {
              
        let ans = 0;
        let i = 0 ;
        
        //console.log(element.link);
          
          await this.storage.get('solve_quiz'+element.link).then(async val => {
            if(val){
              count_post[element.link] = "100";
              count_postPercentage[element.link] = "1";
             }
             else{
              count_post[element.link] = "0";
              count_postPercentage[element.link] = "0";
             }
          });
           
          // let num = ans/element.count_post;
          // count_postPercentage[element.link] = num.toFixed(2);
        

        i++;

      });

      
      this.percentageBar = count_post;
      this.percentage = count_postPercentage;

      
      this.percentageBar = count_post;
      this.percentage = count_postPercentage;
      console.log("here",this.percentage);



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
