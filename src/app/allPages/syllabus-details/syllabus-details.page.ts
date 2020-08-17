import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-syllabus-details',
  templateUrl: './syllabus-details.page.html',
  styleUrls: ['./syllabus-details.page.scss'],
})
export class SyllabusDetailsPage implements OnInit {

  title:string = "Syllabus";
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
