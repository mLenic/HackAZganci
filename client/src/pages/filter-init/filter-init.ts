import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { HomePage } from '../home/home';
import { DashboardPage } from '../dashboard/dashboard';

import { Filter } from '../../providers/filter';

@Component({
  selector: 'page-filter-init',
  templateUrl: 'filter-init.html'
})
export class FilterInitPage {

	public questionCounter = 0;
	public questionsNumber = 10;
	public width = 0;
	public offset = 0;
	public progressBarUnit = 0;
	public currentProgress = 0;
  public images = ['cerkev', 'domacija', 'freska', 'grad', 'kozolec', 'kulinarika', 'najdisce'];

  constructor(
    public navCtrl: NavController, 
    platform: Platform,
    public filter: Filter) {
    platform.ready().then((readySource) => {
      this.width = platform.width();
      this.progressBarUnit = this.width / this.questionsNumber;
      this.currentProgress = this.progressBarUnit;
    });
  }

  public goToHome() {
    this.navCtrl.push(HomePage);
  }

  nextQuestion(cnt: number = 3) {

    if(cnt == 1) {
      this.filter.setHomeCnt(1);
    } else  if(cnt == 0){
      this.filter.setHomeCnt(0);
    }
  	this.questionCounter++;
    console.log(this.questionCounter)

    if (this.questionCounter === this.questionsNumber - 1) {
        this.navCtrl.push(DashboardPage);
    }

  	this.offset = this.width * this.questionCounter + 100 * this.questionCounter;
  	this.currentProgress += this.progressBarUnit;
  }

}
