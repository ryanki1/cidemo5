import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'wc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class WCAppComponent {
  title = 'wc';
  constructor(private router: Router) {
    router.initialNavigation();
  }
}
