import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromProducts from './product.reducer';
import * as fromReview from './review.reducer';

// Extends the app state to include the product and reviews feature.
// This is required because products and reviews are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
  products: fromProducts.ProductState;
  reviews: fromReview.ReviewState;
}

// Selector functions
const getProductFeatureState = createFeatureSelector<fromProducts.ProductState>('products');

const getReviewFeatureState = createFeatureSelector<fromReview.ReviewState>('reviews');


export const getCurrentSelectedProductId = createSelector(
  getReviewFeatureState,
  (state: fromReview.ReviewState) => {
    if (!state) {
      return;
    } else {
      return state.productId;
    }
  }
);

export const getReviews = createSelector(
  getReviewFeatureState,
  getCurrentSelectedProductId,
  (state: fromReview.ReviewState, productId: number) => {
    if (isNaN(productId)) {
      return [];
    } else {
      return state.reviews;
    }
  }
);

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  getCurrentProductId,
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0
      };
    } else {
      return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
    }
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error
);
