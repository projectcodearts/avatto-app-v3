import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizInstructionPageRoutingModule } from './quiz-instruction-routing.module';

import { QuizInstructionPage } from './quiz-instruction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizInstructionPageRoutingModule
  ],
  declarations: [QuizInstructionPage]
})
export class QuizInstructionPageModule {}
