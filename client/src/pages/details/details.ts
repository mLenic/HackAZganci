import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform} from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
    
    public object;

    constructor(
        public navController: NavController,
        public navParams: NavParams,
        private nativeAudio: NativeAudio) 
    {
        if(this.navParams.get('heritage')){
            this.object = this.navParams.get('heritage');
        }

    }

    public close() {
        this.navController.pop();
    }

    public playText() {
        console.log("was clicked");
        this.nativeAudio.play('uniqueId1');
    }
}