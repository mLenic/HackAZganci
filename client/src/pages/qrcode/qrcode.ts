import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@Component({
  selector: 'page-qr',
  templateUrl: 'qrcode.html'
})
export class QRCodePage {

  constructor(public navCtrl: NavController,
              public androidPermissions: AndroidPermissions,
              public qrScanner: QRScanner) {
    this.qrScanner = qrScanner;
    //scanQr()
  }

  scanqr() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
         if (status.authorized) {
           // camera permission was granted

           // start scanning
           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
             console.log('Scanned something', text);

             this.qrScanner.hide(); // hide camera preview
             scanSub.unsubscribe(); // stop scanning
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


  // scanQr() {
  //     this.qrScanner.prepare()
  //       .then((status: QRScannerStatus) => {
  //         if (status.authorized) {
  //           let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //             if (text) {
  //               scanSub.unsubscribe();
  //               this.participantService.join(text).then((response: any) => {
  //                 this.qrCodeService.addQrValues(text);
  //                 this.events.publish('QrScanFinish', response);
  //                 this.qrScanner.hide();
  //                 if(this.navCtrl) {
  //                   this.navCtrl.removeView(this.navCtrl.getActive());
  //                 }
  //                 window.document.querySelector('body').classList.add('transparent-body');
  //                 if (response.stat == Constants.OK) {
  //                   this.navCtrl.push(ChallengeDetailsPage, {challengeId: response.participant.chal_id});
  //                 } else {
  //                   let toast = this.toastCtrl.create({
  //                     message: "Something went wrong.",
  //                     duration: 3000
  //                   });
  //                   toast.present();
  //                 }
  //
  //               });
  //             }
  //             else {
  //               this.qrScanner.destroy();
  //             }
  //           });
  //           this.qrScanner.show();
  //         } else if (status.denied) {
  //           this.navCtrl.setRoot(ChallengesListPage);
  //         }
  //       })
  //       .catch((e: any) => console.log('Error is', e));
  //   }

}
