import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FilterInitPage } from '../filter-init/filter-init';
import { MapsPage } from '../maps/maps';
import { QRCodePage } from '../qrcode/qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public latitude: number;
  public longitude: number;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  public goToFilter(){
    this.navCtrl.push(QRCodePage);
  }

  public goToMaps() {
    this.navCtrl.push(MapsPage);
  }


}
