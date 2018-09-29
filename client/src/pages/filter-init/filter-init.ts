import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform} from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-filter-init',
  templateUrl: 'filter-init.html'
})
export class FilterInitPage {

	public questionCounter = 0;
	public questionsNumber = 3;
	public width = 0;
	public offset = 0;
	public progressBarUnit = 0;
	public currentProgress = 0;

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.ready().then((readySource) => {
      this.width = platform.width();
      this.progressBarUnit = this.width / this.questionsNumber;
      this.currentProgress = this.progressBarUnit;
      console.log('Width: ' + platform.width());
      console.log('Height: ' + platform.height());
    });
  }

  nextQuestion() {
  	this.questionCounter++;
  	/*
  	if(this.questionCounter == this.questionNumber - 1) {
  		//redirect
  	}
  	*/
    
    
    if(this.questionCounter == this.questionsNumber) {
        this.navCtrl.push(DashboardPage);
    }

  	this.offset = this.width * this.questionCounter + 100 * this.questionCounter;
  	this.currentProgress += this.progressBarUnit;
  }

}
