import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { Filter } from '../../providers/filter';
import { DashboardPage } from '../dashboard/dashboard';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-qr',
  templateUrl: 'qrcode.html'
})
export class QRCodePage {

  public scanSub: any;

  constructor(
    public navCtrl: NavController,
    public androidPermissions: AndroidPermissions,
    public qrScanner: QRScanner,
    public filter: Filter,
    public toastCtrl: ToastController) {
    this.qrScanner = qrScanner;
    this.scanQrCode();
  }

  scanQrCode() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted

           // start scanning
           this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
              console.log('Scanned something', text);

              var ctx = this.filter.getCnt();
              if(ctx == 0) {
                this.navCtrl.push(DetailsPage, {"heritage": this.heritage2});
              } else {
                this.navCtrl.push(DetailsPage, {"heritage": this.heritage2});
              }
              ctx += 1;
              this.filter.setCnt(ctx);

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
    this.navCtrl.pop();
  }

  /** Objects */
  public heritage2 = {
    title: 'Palača Kazina',
    description: 'Večnamenska javna palača, zgrajena 1835-1837 pod vodstvom V. Vadnava, je strogo klasicistična arhitektura, ki odraža racionalizem 1. polovice 19. stol. Krasitvena dela v dvorani iz 19. stol. dopolnjujejo interierji v slogu funkcionalizma.',
    time1: '10:45',
    time2: '11:45',
    sound: 'uniqueId1',
    image: '../../assets/imgs/icon_castle.svg',
    largeImage: '../../assets/imgs/kazina.jpg'
};

  /** Objects */
  public heritage3 = {
    title: 'Rudnik zivega srebra - Ljubljana',
    description: 'Zelo zanimiv rudnik.',
    time1: '9.00',
    time2: '19:00',
    sound: 'uniqueId1',
  }
}
