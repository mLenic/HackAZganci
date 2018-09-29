import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Pages
import { MyApp }      from './app.component';
import { HomePage }   from '../pages/home/home';
import { FilterInitPage } from '../pages/filter-init/filter-init';

// Providers
import { HttpReq }      from '../providers/http-req';
import { GeoService }  from '../providers/geoservice';
import { Filter }       from '../providers/filter' ;

// Native modules
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FilterInitPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FilterInitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpReq,
    GeoService,
    Filter,
    Geolocation
  ]
})
export class AppModule {}
