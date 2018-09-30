import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage }       from '../pages/home/home';
import { FilterInitPage } from '../pages/filter-init/filter-init';
import { DashboardPage }  from '../pages/dashboard/dashboard';
import { DetailsPage }    from '../pages/details/details';
import { QRCodePage }     from '../pages/qrcode/qrcode';

import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = DashboardPage;

  constructor(
    platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private nativeAudio: NativeAudio) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.nativeAudio.preloadSimple('uniqueId1', 'assets/sounds/fails.wav');
    });
  }
}
