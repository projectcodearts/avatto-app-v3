import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-papers-page',
  templateUrl: './papers-page.page.html',
  styleUrls: ['./papers-page.page.scss'],
})
export class PapersPagePage implements OnInit {

  title:string = "Papers";
  constructor() { }

  ngOnInit() {
  }

}
