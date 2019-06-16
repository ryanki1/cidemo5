import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import * as fromReducer from '../log/state/log.reducer';
import * as fromFilterReducer from '../log/state/filter.reducer';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {LogEffects} from '../log/state/log.effect';
import {LogFilterEffects} from '../log/state/filter.effect';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature('users', reducer),
    StoreModule.forFeature('logs', fromReducer.logReducer),
    StoreModule.forFeature('filters', fromFilterReducer.filterReducer),
    EffectsModule.forFeature([LogEffects]),
    EffectsModule.forFeature([LogFilterEffects]),
  ],
  declarations: [
    LoginComponent
  ]
})
export class UserModule { }
