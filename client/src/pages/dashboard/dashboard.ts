import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
    
    public loadingTimeMs = 3000;
    public showLoader = true;

    constructor(public navCtrl: NavController){

    }
    ionViewDidLoad() {
        setTimeout(() => {
            
        }, this.loadingTimeMs);
    }

}