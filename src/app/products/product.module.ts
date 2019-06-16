import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SharedModule} from '../shared/shared.module';

import {ProductShellComponent} from './containers/product-shell/product-shell.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';

/* NgRx */
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/product.reducer';
import {reviewReducer} from './state/review.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ProductEffects} from './state/product.effects';
import {ReviewEffects} from './state/review.effects';
import {FilterService, GridModule} from '@progress/kendo-angular-grid';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';

const productRoutes: Routes = [
  {path: '', component: ProductShellComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', reducer),
    StoreModule.forFeature('reviews', reviewReducer),
    EffectsModule.forFeature(
      [ProductEffects]
    ),
    EffectsModule.forFeature(
      [ReviewEffects]
    ),
    GridModule,
    DropDownsModule
  ],
  providers: [
    FilterService
  ],
  declarations: [
    ProductShellComponent,
    ProductListComponent,
    ProductEditComponent
  ]
})
export class ProductModule {
}
