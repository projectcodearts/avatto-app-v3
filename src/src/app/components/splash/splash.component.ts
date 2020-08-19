import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private _rouet: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this._rouet.navigate(['entrypoint']);
    }, 5000);
  }

}
