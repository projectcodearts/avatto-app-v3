import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizMainPagePageRoutingModule } from './quiz-main-page-routing.module';

import { QuizMainPagePage } from './quiz-main-page.page';
import { QuizMainComponent } from 'src/app/components/quiz-main/quiz-main.component';
import { QuizserviceService } from 'src/app/allServices/quizservice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizMainPagePageRoutingModule
  ],
  declarations: [QuizMainPagePage, QuizMainComponent],
  providers: [QuizserviceService]
})
export class QuizMainPagePageModule {}
