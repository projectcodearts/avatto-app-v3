import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPageRoutingModule } from './orders-routing.module';

import { OrdersPage } from './orders.page';
import { OrdersComponent } from '../../components/orders/orders.component';
import { ViewQuizComponent } from 'src/app/components/quiz/view-quiz/view-quiz.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule
  ],
  declarations: [OrdersPage,OrdersComponent]
})
export class OrdersPageModule {}
