import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';

import { DetailsPage } from '../pages/details/details';

@Component({
  selector: 'list-component',
  templateUrl: 'list-component.html',
})
export class ListComponent {

  constructor(public navController: NavController) {}

  @Input() isFirst: Boolean = false;
  @Input() isLast: Boolean = false;
  @Input() object: any;

  public displayDetails(object: any) {
    this.navController.push(DetailsPage, {'heritage': object});
  }
}
