import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eligiblity-page-details',
  templateUrl: './eligiblity-page-details.page.html',
  styleUrls: ['./eligiblity-page-details.page.scss'],
})
export class EligiblityPageDetailsPage implements OnInit {
  title: string = "Eligiblity Details";
  data:any;
  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    let pid = this.route.snapshot.paramMap.get('id');
    this.http.get('https://avatto.in/wp-json/avatto/v2/page-details/'+pid).subscribe(res=>{
      this.data = JSON.stringify(res);
      this.data = JSON.parse(this.data);
      this.title = this.data.title;
    })
  }

}
