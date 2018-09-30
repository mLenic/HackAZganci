import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'list-component',
  templateUrl: 'list-component.html',
})
export class ListComponent {

    @Input() isFirst: Boolean = false;
    @Input() isLast: Boolean = false;
    
}