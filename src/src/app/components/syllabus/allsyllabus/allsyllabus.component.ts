import { Component, OnInit } from '@angular/core';
import { SyllabusService } from 'src/app/allServices/syllabus.service';

@Component({
  selector: 'app-allsyllabus',
  templateUrl: './allsyllabus.component.html',
  styleUrls: ['./allsyllabus.component.scss'],
})
export class AllsyllabusComponent implements OnInit {

  fetching = true;
  title: string = "Syllabus";
  sylllabus: any = []; 
  constructor(private _syllabus: SyllabusService) { }
  
  ngOnInit() {
    this.fetching = true;
    this._syllabus.getsyllabus().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.sylllabus = JSON.parse(data);
      this.fetching = false;
    });
  }

}
