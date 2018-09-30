import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { ListComponent } from '../../components/list-component';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
    
    public loadingTimeMs = 3000;
    public showLoader = false;

    constructor(public navCtrl: NavController){

    }
    ionViewDidLoad() {
        setTimeout(() => {
            this.showLoader = false;
        }, this.loadingTimeMs);
    }

}