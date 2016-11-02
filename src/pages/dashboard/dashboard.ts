import { Component } from '@angular/core';
import { NavController,NavParams,AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Maps } from '../maps/maps';
import { AuthPage } from '../auth/home/home'

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  navParams:any;
  constructor(public navCtrl: NavController,public params:NavParams,public alertCtrl:AlertController) {
    this.navParams = params.data;
  }

  logOut(){
    let confirm = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: '¿Estás seguro que deseas cerrar tu sesión?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log("Dismiss");
          }
        },
        {
          text: 'Salir',
          handler: () => {
            this.navCtrl.setRoot(AuthPage);
          }
        }
      ]
    });
    confirm.present();
  }

  OnChat(){
    this.navCtrl.push(HomePage,this.navParams);
  }

  OnMaps(){
    this.navCtrl.push(Maps,this.navParams);
  }

}
