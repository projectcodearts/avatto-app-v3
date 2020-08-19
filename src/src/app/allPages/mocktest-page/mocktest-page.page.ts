import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mocktest-page',
  templateUrl: './mocktest-page.page.html',
  styleUrls: ['./mocktest-page.page.scss'],
})
export class MocktestPagePage implements OnInit {

  title:string = "Mock Test";
  constructor() { }

  ngOnInit() {
  }

}
