import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MapsPage } from '../maps/maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public maps() {
    this.navCtrl.push(MapsPage);
  }

}
