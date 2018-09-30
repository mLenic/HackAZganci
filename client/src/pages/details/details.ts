import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform} from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
    
    public object;

    constructor(
        public navController: NavController,
        public navParams: NavParams) 
    {
        if(this.navParams.get('heritage')){
            this.object = this.navParams.get('heritage');
        }

    }

    public close() {
        this.navController.pop();
    }
}