import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MaleComponent} from './components/male/male.component';
import {FemaleComponent} from './components/female/female.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'male'
  },
  {
    path: 'wc-app/male',
    component: MaleComponent
  },
  {
    path: 'wc-app/female',
    component: FemaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
