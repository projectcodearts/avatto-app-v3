import { Component, OnInit } from '@angular/core';
import { DescriptionService } from '../../../../allServices/description.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-drescription',
  templateUrl: './drescription.component.html',
  styleUrls: ['./drescription.component.scss'],
})
export class DrescriptionComponent implements OnInit {

  fetching = false;
  fdescription: any = []; 
  description:any;
  constructor(private _description: DescriptionService,private route: ActivatedRoute,private router:Router) { }

  expanded: boolean = true;
  plus: boolean = false;
  ngOnInit() {
    this.fetching = true;
    let id = this.route.snapshot.paramMap.get('id');
    this._description.getDescription(id).pipe().subscribe(response=>{
      const data = JSON.stringify(response)
      this.fdescription = JSON.parse(data);
      this.description = (this.fdescription[0].description);
      this.fetching = false;
    });
  }
  accordion(){
    this.expanded=!this.expanded;
    this.plus=!this.plus;
  }
  

}
