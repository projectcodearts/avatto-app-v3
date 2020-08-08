import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FiltercategoryComponent } from './filtercategory/filtercategory.component';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  constructor(public modalController: ModalController,) { }
  async filtercategory() {
    const modal = await this.modalController.create({
      component: FiltercategoryComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  ngOnInit() {}

}
