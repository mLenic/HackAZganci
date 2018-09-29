import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-audioplayer',
  templateUrl: 'audioplayer.html'
})
export class AudioPage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {
    this.nativeAudio = nativeAudio;

    this.nativeAudio.preloadSimple('uniqueId1', 'src/assets/kazina.wav');
  }

  play() {
    this.nativeAudio.play('uniqueId1');
  }

}
