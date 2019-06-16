import {ReviewActions, ReviewActionTypes} from './review.actions';
import {Review} from '../review';
import * as fromApp from '../../state/app.state';

export interface ReviewState {
  productId: number | null;
  reviews: Review[];
  error: string;
}

const initialState: ReviewState = {
  productId: null,
  reviews: [],
  error: ''
}

export function reviewReducer(state: ReviewState = initialState, action: ReviewActions): ReviewState {

  switch (action.type) {
    case ReviewActionTypes.LoadReviewSuccess:
      return {
        ...state,
        ...action.payload
      }
    case ReviewActionTypes.LoadReviewFail:
      return {
        ...state,
        ...{error: action.payload}
      };
  }
}
