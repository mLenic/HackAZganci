import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { dediscina } from '../../data/dediscina';

@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  constructor(public navCtrl: NavController, private launchNavigator: LaunchNavigator) {

  }

  ionViewDidLoad() {
    const indices = this.randomArray(10, dediscina.length);

    let options: LaunchNavigatorOptions = {
      start: this.formatCoordinates(indices[0]),
      app: 'google_maps'
    };

    let destination = '';
    for (let i = 1; i < indices.length - 1; i++) {
      destination += `${this.formatCoordinates(indices[i])}+to:`;
    }
    destination += this.formatCoordinates(indices[indices.length - 1]);

    debugger;

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
