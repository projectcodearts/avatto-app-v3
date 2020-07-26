import { Component, OnInit } from '@angular/core';
import { SyllabusService } from '../../allServices/syllabus.service';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.scss'],
})
export class SyllabusComponent implements OnInit {
  fetching = true;
  title: string = "Syllabus";
  sylllabus: any = []; 
  constructor(private _syllabus: SyllabusService) { }
  slideOpts = {
    speed: 400,
    slidesPerView: 3,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 11
  };
  ngOnInit() {
    this.fetching = true;
    this._syllabus.getsyllabus().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.sylllabus = JSON.parse(data);
      this.fetching = false;
    });
  }

}
