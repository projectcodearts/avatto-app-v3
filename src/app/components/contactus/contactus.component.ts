import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  @ViewChild('contactForm') contactForm: NgForm
  constructor() { }

  ngOnInit() {}
  onSubmit(form: NgForm){
    console.log(this.contactForm)
  }
 
}
