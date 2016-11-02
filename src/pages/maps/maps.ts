import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Geolocation} from 'ionic-native';
import {map} from "rxjs/operator/map";

declare var google;

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class Maps {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  origen:any;
  destination:any;
  public directionsDisplay;

  directionsService:any = new google.maps.DirectionsService();

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
   this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.loadMap();
  }

  addRoute(directionsDisplay){
      var request = {
        origin:this.origen,
        destination:this.destination,
        travelMode: google.maps.TravelMode.DRIVING
      };
      this.directionsService.route(request,function(result,status){
        if (status == google.maps.DirectionsStatus.OK) {
          console.log("intentando trasar ruta");
          directionsDisplay.setDirections(result);
        }

      });
  }

  loadMap(){

    Geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.origen = latLng;
        let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.directionsDisplay.setMap(this.map);
      console.log("Geo funcionando con: "+position);

    }, (err) => {
      console.log(err);
    });

  }

}
