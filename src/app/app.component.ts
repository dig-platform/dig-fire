import { Component } from '@angular/core';
import {DigFire} from '@dig-platform/dig-fire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title$ = this.digFire.app?.getObservable('title');
  constructor(private digFire: DigFire) {
  }
}
