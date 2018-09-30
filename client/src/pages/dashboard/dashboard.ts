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
    public showLoader = true;

    

    constructor(public navCtrl: NavController){

    }
    ionViewDidLoad() {
        setTimeout(() => {
            this.showLoader = false;
        }, this.loadingTimeMs);
    }

    /** Objects */
    public heritage1 = {
        title: 'Rudnik zivega srebra - Idrija',
        description: 'Zelo zanimiv rudnik.',
        time1: '9.00',
        time2: '19:00',
        sound: 'uniqueId1',
    }
}