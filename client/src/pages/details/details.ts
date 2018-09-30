import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ToastController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { QRCodePage } from '../qrcode/qrcode';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  public object;

  constructor(
    public navController: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private nativeAudio: NativeAudio
    ) {
    if (this.navParams.get('heritage')) {
      this.object = this.navParams.get('heritage');
    }
  }

  public close() {
    this.navController.pop();
  }

  public playText() {
    if (this.object) {
      this.nativeAudio.play(this.object.sound);
    } else {
      let toast = this.toastCtrl.create({
        message: "This Heritage site does not have a detailed audio description.",
        duration: 2000,
        position: 'bottom',
      });
      toast.present();
    }
  }

  public showQR() {
    this.navController.push(QRCodePage);
  }
}
