import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { FilterInitPage } from '../filter-init/filter-init';
import { GeoService } from '../../providers/geoservice';

import { MapsPage } from '../maps/maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public latitude: number;
  public longitude: number;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public geoService: GeoService,
    public ngZone: NgZone) {}
  
  ionViewDidLoad() {
  
    this.geoService.getGeoObservable()
        .subscribe((data) => {
            this.ngZone.run(() => {
              this.latitude = data.lat;
              this.longitude = data.long;
            });
            let toast = this.toastCtrl.create({
              message: "Latitude " + this.latitude + " Longitude: " + this.longitude,
              duration: 1000,
              position: 'top',
            });  
            toast.present();
        });

    this.geoService.startWatchingGeolocation();
  }
    
  public goToFilter(){
    this.navCtrl.push(FilterInitPage);
  }

  public maps() {
    this.navCtrl.push(MapsPage);
  }

}
