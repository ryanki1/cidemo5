import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../user/auth.service';
import * as fromLogReducer from '../log/state/log.reducer';
import {select, Store} from '@ngrx/store';
import {LogAction, LogUserLogoffAction} from '../log/state/log.action';
import {LogState} from '../log/state/log.reducer';
import {getAllLogs} from '../log/state';
import {Observable} from 'rxjs';
import {Log} from '../log/state/log.reducer';

@Component({
  selector: 'pm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router,
              private authService: AuthService,
              private store: Store<fromLogReducer.LogState>) {
  }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logout();
    this.store.dispatch(new LogUserLogoffAction(this.userName));
    this.router.navigate(['/welcome']);
  }
}
