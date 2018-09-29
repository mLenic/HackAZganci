import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';

// Pages
import { MyApp }      from './app.component';
import { HomePage }   from '../pages/home/home';
import { FilterInitPage } from '../pages/filter-init/filter-init';
import { MapsPage } from '../pages/maps/maps';
import { QRCodePage } from '../pages/qrcode/qrcode';
import { AudioPage } from '../pages/audioplayer/audioplayer';


// Providers
import { HttpReq }      from '../providers/http-req';
import { GeoService }  from '../providers/geoservice';
import { Filter }       from '../providers/filter' ;


// Native modules
import { Geolocation } from '@ionic-native/geolocation';
import { QRScanner } from '@ionic-native/qr-scanner';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapsPage,
    AudioPage,
    FilterInitPage,
    QRCodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapsPage,
    FilterInitPage,
    AudioPage
    QRCodePage
  ],
  providers: [
    LaunchNavigator,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpReq,
    GeoService,
    Filter,
    NativeAudio,
    Geolocation
    Geolocation,
    QRScanner,
    AndroidPermissions
  ]
})
export class AppModule {}
