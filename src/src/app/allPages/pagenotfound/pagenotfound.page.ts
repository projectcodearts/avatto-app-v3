import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.page.html',
  styleUrls: ['./pagenotfound.page.scss'],
})
export class PagenotfoundPage implements OnInit {

  title:string = "Page Not Found";
  constructor() { }

  ngOnInit() {
  }

}
