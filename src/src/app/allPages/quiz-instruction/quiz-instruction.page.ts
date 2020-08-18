import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz-instruction',
  templateUrl: './quiz-instruction.page.html',
  styleUrls: ['./quiz-instruction.page.scss'],
})
export class QuizInstructionPage implements OnInit {
  

  title: string = "Instruction";
  instruction:any;
  instructionText:any;
  
  constructor(public navParams: NavParams,public modalCtrl: ModalController,private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.navParams.get('pid');
   // console.log(id);
    this.http.get('https://avatto.in/wp-json/avatto/v2/quiz-instructions/'+id).subscribe(response=>{
        
      const data = JSON.stringify(response)
      this.instruction = JSON.parse(data);
      this.instructionText = this.instruction[0].instruction;
      //console.log(this.instruction[0].instruction)
    
    })
  }

  dismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
