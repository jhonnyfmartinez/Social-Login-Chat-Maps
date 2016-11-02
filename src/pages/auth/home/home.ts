import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { AuthProvider } from '../../../providers/auth';
import { Dashboard } from '../../dashboard/dashboard';

declare let firebase: any;
declare var window: any;


@Component({
  templateUrl: 'home.html',
  selector: 'auth-home'
})

export class AuthPage {
  error: any;

  constructor(private navCtrl: NavController, private auth: AuthProvider) {}

  loginUserWithFacebook() {
    this.auth.loginWithCustomFacebook().subscribe(data => {

      this.navCtrl.setRoot(Dashboard,{name:data.name,img:data.image});
    }, err => {
      this.error = err;
    });
  }

  loginUserWithGoogle() {
    this.auth.loginWithCustomGoogle().subscribe(data => {
      this.navCtrl.setRoot(Dashboard,{name:data.name,img:data.image});
    }, err => {
      this.error = err;
    });
  }
}
