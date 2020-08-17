import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController  } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss'],
})
export class ViewResultComponent implements OnInit {
  postAns : any = JSON.parse(localStorage.getItem("postAns"))?JSON.parse(localStorage.getItem("postAns")):{};
  questionList : any = JSON.parse(localStorage.getItem("question"))?JSON.parse(localStorage.getItem("question")):[];
  optionList:any;
  resultSheet : any = [];
  shortResult : any = [];
  ViewDetail : any = "";
  constructor(public modalController: ModalController,public nav: NavController,private storage: Storage) { }

  ngOnInit() {

    this.storage.get("questions_data").then((val)=>{
      this.optionList = val[0].question;
      console.log(val[0].question);
    })


    let correctChoiceCount : number = 0,incorrectChoiceCount : number = 0,unattended : number = 0 ,timeTaken,score;
    for(var key in this.questionList){
      console.log(this.questionList[key]);
      let result = {};
      result['questionName'] = this.questionList[key]["name"];
      result['explain'] = this.questionList[key]["explain"];
      if(typeof this.postAns[key] === 'undefined'){
        result['userChoice'] = "N/A";
        result['correctChoice'] = this.questionList[key]["choice"];     
        unattended++  
      } else {
        if(this.postAns[key]["markReviewd"] == "notanswerd"){
          result['userChoice'] = "N/A";
          result['correctChoice'] = this.questionList[key]["choice"];
          unattended++       
        } else {
          result['userChoice'] = this.postAns[key]["choice"];
          result['correctChoice'] = this.postAns[key]["rightChoice"];
          if(result['userChoice'] == result['correctChoice']){
            correctChoiceCount++;
          } else {
            incorrectChoiceCount++
          }
        }       
      }

      this.resultSheet[key] = result;
    }
    this.shortResult['totQuestion'] = this.questionList.length;
    this.shortResult['correctChoiceCount'] = correctChoiceCount;
    this.shortResult['incorrectChoiceCount'] = incorrectChoiceCount;
    this.shortResult['unattended'] = unattended;
    this.shortResult['timeTaken'] = this.timeConversion();
    
  }
  
  timeConversion(){
    console.log(parseInt(localStorage.getItem("totalTime")));
    console.log("in result",parseInt(localStorage.getItem('timer')));
    let totSec = parseInt(localStorage.getItem("totalTime")) - parseInt(localStorage.getItem('timer'));
    localStorage.clear();
    return totSec;
  }

  async checkExplain(explain){
    this.nav.navigateForward(['/explain',{"explain":explain}]);
  }

  
  vewDetails(){
    this.ViewDetail = "true";
  }

}
