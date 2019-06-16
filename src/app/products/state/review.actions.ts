import {ReviewState} from './review.reducer';
import {Action} from '@ngrx/store';

export enum ReviewActionTypes {
  LoadReview = '[Product] Load Review',
  LoadReviewSuccess = '[Product] Load Review Success',
  LoadReviewFail = '[Product] Load Review Fail',
}

export class LoadReview implements Action {
  readonly type = ReviewActionTypes.LoadReview;
  constructor(public payload: number) {
  }
}

export class LoadReviewSuccess implements Action {
  readonly type = ReviewActionTypes.LoadReviewSuccess;
  constructor(public payload: ReviewState) {
  }
}

export class LoadReviewFail implements Action {
  readonly type = ReviewActionTypes.LoadReviewFail;
  constructor(public payload: string) {
  }
}

export type ReviewActions = LoadReview | LoadReviewSuccess | LoadReviewFail;
