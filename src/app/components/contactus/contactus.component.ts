import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  @ViewChild('contactForm') contactForm: NgForm
  constructor(private http:HttpClient,public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) { }

  ngOnInit() {}
  onSubmit(form: NgForm){
    console.log(this.contactForm.value)
    this.http.get('https://avatto.in/wp-json/avatto/v2/contact-us/?fname='+this.contactForm.value.first_name+'&lname='+this.contactForm.value.last_name+'&email='+this.contactForm.value.email+'&phone_no='+this.contactForm.value.phone_no+'&subject='+this.contactForm.value.subject+'&address='+this.contactForm.value.address).subscribe(async data=>{
      console.log(data);
      
          const toast = await this.toastCtrl.create({
                message: data[0].message,
                duration: 2000
          });
          toast.present(); 
    })
  }
 
}
