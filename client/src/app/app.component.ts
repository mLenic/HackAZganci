import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';

import { HomePage } from '../pages/home/home';
import { MapsPage } from '../pages/maps/maps';
import { FilterInitPage } from '../pages/filter-init/filter-init';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { DetailsPage } from '../pages/details/details';
import { QRCodePage } from '../pages/qrcode/qrcode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private nativeAudio: NativeAudio
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.nativeAudio.preloadSimple('uniqueId1', 'assets/sounds/kazina.mp3');
    });
  }
}
