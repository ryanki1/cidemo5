import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {AppRoutingModule} from './app-routing.module';
import {WCAppComponent} from './app.component';
import {FemaleComponent} from './components/female/female.component';
import {MaleComponent} from './components/male/male.component';

@NgModule({
  declarations: [
    WCAppComponent, MaleComponent, FemaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [WCAppComponent, MaleComponent, FemaleComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const appElement = createCustomElement(WCAppComponent,  { injector: this.injector });
    customElements.define('wc-app', appElement);
    const maleElement = createCustomElement(MaleComponent, {injector: this.injector});
    customElements.define('male', maleElement);
    const femaleElement = createCustomElement(FemaleComponent, {injector: this.injector});
    customElements.define('female', femaleElement);
  }

}
