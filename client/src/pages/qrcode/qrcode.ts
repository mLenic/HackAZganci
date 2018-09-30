import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { DashboardPage } from '../dashboard/dashboard';
@Component({
  selector: 'page-qr',
  templateUrl: 'qrcode.html'
})
export class QRCodePage {
  
  public scanSub: any;

  constructor(public navCtrl: NavController,
              public androidPermissions: AndroidPermissions,
              public qrScanner: QRScanner) {
    this.qrScanner = qrScanner;
    this.scanqr();
  }

  scanqr() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted

           // start scanning
           this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);

             this.qrScanner.hide(); // hide camera preview
             this.scanSub.unsubscribe(); // stop scanning
           });

           this.qrScanner.resumePreview();
           this.qrScanner.show();

         } else if (status.denied) {
           // camera permission was permanently denied
           // you must use QRScanner.openSettings() method to guide the user to the settings page
           // then they can grant the permission from there
         } else {
           // permission was denied, but not permanently. You can ask for permission again at a later time.
         }
      })
      .catch((e: any) => console.log('Error is', e));
  }
  
  ionViewCanLeave() {
    window.document.querySelector('body').classList.remove('transparent-body');
    
    this.qrScanner.destroy();
  }

  public close(){
    console.log("Called this");
    this.navCtrl.pop();
  }
}
