import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-quiz-explain',
  templateUrl: './quiz-explain.page.html',
  styleUrls: ['./quiz-explain.page.scss'],
})
export class QuizExplainPage implements OnInit {
  exp : any;
  title:string = "Explain";
  constructor(private router: Router, private route: ActivatedRoute, private navCtrl: NavController) {
    this.exp = this.route.snapshot.paramMap.get('explain');
   }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
  
}
