import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

import { Filter } from '../../providers/filter';
import { GeoService } from '../../providers/geoservice';
import { dediscina } from '../../assets/data/dediscina';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  public latitude: number;
  public longitude: number;
  public loadingTimeMs = 2500;
  public showLoader = true;
  public image = '';
  public counter = 0;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private launchNavigator: LaunchNavigator,
    private ngZone: NgZone,
    private geoService: GeoService,
    public filter: Filter
  ) { }

  ionViewDidLoad() {
    // this.getGeoLocation();
    // this.launchGoogleMaps();

    this.counter = this.filter.getHomeCnt();
    this.image = this.counter === 0 ? '../../assets/imgs/maps.png' : '../../assets/imgs/maps2.png';
    setTimeout(() => {
        this.showLoader = false;
    }, this.loadingTimeMs);
  }

  private getGeoLocation() {
    this.geoService.getGeoLocation().then((data) => {
      this.ngZone.run(() => {
        this.latitude = data['lat'];
        this.longitude = data['long'];
      });
      let toast = this.toastCtrl.create({
        message: "Got data " + this.longitude,
        duration: 1000,
        position: 'top',
      });
      toast.present();
    }, error => {
      let toast = this.toastCtrl.create({
        message: "ERROR",
        duration: 1000,
        position: 'top',
      });
    });
  }

  private launchGoogleMaps() {
    const indices = this.randomArray(10, dediscina.length);

    let options: LaunchNavigatorOptions = {
      start: this.formatCoordinates(indices[0]),//`${this.latitude},${this.longitude}`,
      app: this.launchNavigator.APP.GOOGLE_MAPS
    };

    let destination = '';
    for (let i = 1; i < indices.length - 1; i++) {
      destination += `${this.formatCoordinates(indices[i])}+to:`;
    }
    destination += this.formatCoordinates(indices[indices.length - 1]);

    this.launchNavigator.navigate(destination, options).then(
      success => {
        let toast = this.toastCtrl.create({
          message: 'google works',
          duration: 1000,
          position: 'top',
        });
        toast.present();
      },
      error => {
        let toast = this.toastCtrl.create({
          message: 'google not works',
          duration: 1000,
          position: 'top',
        });
        toast.present();
      }
    );
  }

  private randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
        return Math.round(Math.random() * max);
    });
  }

  private formatCoordinates(index: number): string {
    return `${dediscina[index]['WGS.X']},${dediscina[index]['WGS.Y']}`
  }

}
