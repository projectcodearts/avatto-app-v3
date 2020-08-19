import { Component, OnInit } from '@angular/core';
import { MocktestService } from 'src/app/allServices/mocktest.service';

@Component({
  selector: 'app-mocktest',
  templateUrl: './mocktest.component.html',
  styleUrls: ['./mocktest.component.scss'],
})
export class MocktestComponent implements OnInit {
  fetching = true;
  title: string = "Mock Test";
  mocktest: any;
  constructor(private _mocktest: MocktestService) { }
  slideOpts = {
    initialSlide: 1,
    freeMode: true,
    speed: 400,
    slidesPerView: 3,
    watchSlidesProgress: true,
    grabCursor: true,
    spaceBetween: 20
  };
  ngOnInit() {
    this.fetching = true;
    this.mocktest=this._mocktest.getmocktest();
    this.fetching = false;
  }

}
