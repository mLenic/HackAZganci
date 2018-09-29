import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-filter-init',
  templateUrl: 'filter-init.html'
})
export class FilterInitPage {

	public questionCounter = 0
	public questionsNumber = 4

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
  	this.innerWidth = window.innerWidth;
  }

}
