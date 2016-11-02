import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Maps } from '../maps/maps';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  navParams:any;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.navParams = params.data;
  }

  OnChat(){
    this.navCtrl.push(HomePage,this.navParams);
  }

  OnMaps(){
    this.navCtrl.push(Maps,this.navParams);
  }

}
