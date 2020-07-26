import { Component, OnInit } from '@angular/core';
import { PracticeQuestionDetailsServicesService } from '../../allServices/practice-question-details-services.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-practice-question-details-com',
  templateUrl: './practice-question-details.component.html',
  styleUrls: ['./practice-question-details.component.scss'],
})
export class PracticeQuestionDetailsComponent implements OnInit {
  fetching = false;
  practiceQs:any=[];
  previous:any;
  uemail:any;
  constructor(private _practiceqsdts:PracticeQuestionDetailsServicesService,private route: ActivatedRoute,private router:Router,private storage: Storage,private http:HttpClient) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.storage.get('userInfo').then((val) => {
      let data = JSON.stringify(val);
      let user_data = JSON.parse(val);
      this.uemail = user_data.user_email;
    });

    this.http.get('http://avatto.in/wp-json/avatto/v2/paid-check/?id='+id+'&ue='+this.uemail).subscribe(res=>{
      this.previous = res;
      if(this.previous.bought == "no"){
        if(this.previous.id !=""){
          console.log(this.previous.id);
          this.router.navigate(['/products', this.previous.id]);
        }
      }
    })

    this.fetching = true;
    this._practiceqsdts.getPracticeQuestionDetails(id).pipe().subscribe(response=>{
      
      this.practiceQs = response;
      let i =0 ;
      
      let count_post = {};
      this.practiceQs.forEach(element => {
        
        //console.log(element.count_post);
        
        let ans = 0;
        
        element.child.forEach(element2 => {
          //console.log(element.link);
          this.storage.get('mcq_data'+element2.link).then((val) => {
            if(val){
              //console.log(val.lEnd/element.count_post);
              ans+= val.lEnd;
              count_post[i] = (ans);
             }
          });
        });

        i++;

      });

      console.log(count_post);


      if(this.practiceQs.length == 0){
        console.log('no response');
        this.router.navigate(['/mcq', id]);
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
