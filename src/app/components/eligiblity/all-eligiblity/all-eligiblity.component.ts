import { Component, OnInit } from '@angular/core';
import { EligiblityService } from 'src/app/allServices/eligiblity.service';

@Component({
  selector: 'app-all-eligiblity',
  templateUrl: './all-eligiblity.component.html',
  styleUrls: ['./all-eligiblity.component.scss'],
})
export class AllEligiblityComponent implements OnInit {

  fetching = true;
  eligiblity: any;
  constructor(private _eligiblity: EligiblityService) { }
  ngOnInit() {
    this.fetching = true;
    this._eligiblity.getAlleligiblity().pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.eligiblity = JSON.parse(data);
      this.fetching = false;
    });
  }

}
