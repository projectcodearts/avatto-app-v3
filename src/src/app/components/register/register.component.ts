import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/allServices/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastController, AlertController } from '@ionic/angular';
import { ApiService } from '../../allServices/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user = this.api.getCurrentUser();
  userForm: FormGroup;
  


  mainlogo: string = "assets/images/avatto-web-white.png";
  constructor(private fb: FormBuilder,private router:Router, private api: ApiService, private toastCtrl: ToastController, private alertCtrl: AlertController){}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() {
    this.api.signUp(this.userForm.value.username, this.userForm.value.email, this.userForm.value.password).subscribe(
      async res => {
          const toast = await this.toastCtrl.create({
            message: res['message'],
            duration: 3000
          });
          toast.present();
          this.router.navigate(['/sign-in']);
      },
      err => {
        this.showError(err);
      }
    );
  }

  async showError(err) {
    const alert = await this.alertCtrl.create({
      header: err.error.code,
      subHeader: err.error.data.status,
      message: err.error.message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
