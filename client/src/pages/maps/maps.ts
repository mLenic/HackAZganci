import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { GeoService } from '../../providers/geoservice';
import { dediscina } from '../../data/dediscina';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  public latitude: number;
  public longitude: number;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private launchNavigator: LaunchNavigator,
    private ngZone: NgZone,
    private geoService: GeoService) {
  }

  ionViewDidLoad() {
    this.getGeoLocation();
    this.launchGoogleMaps();
  }

  private getGeoLocation() {
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

  private launchGoogleMaps() {
    const indices = this.randomArray(10, dediscina.length);

    let options: LaunchNavigatorOptions = {
      start: `${this.latitude},${this.longitude}`,
      app: 'google_maps'
    };

    let destination = '';
    for (let i = 1; i < indices.length - 1; i++) {
      destination += `${this.formatCoordinates(indices[i])}+to:`;
    }
    destination += this.formatCoordinates(indices[indices.length - 1]);

    this.launchNavigator.navigate(destination, options).then(
      success => console.log('Launched navigator'),
      error => console.log('Error launching navigator', error)
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
