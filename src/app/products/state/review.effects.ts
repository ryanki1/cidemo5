import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProductActions, ProductActionTypes} from './product.actions';
import {Observable} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';
import {LoadReview, LoadReviewFail, LoadReviewSuccess, ReviewActionTypes} from './review.actions';
import {ProductService} from '../product.service';
import {Action} from 'rxjs/internal/scheduler/Action';
import {reviewReducer, ReviewState} from './review.reducer';
import {Review} from '../review';
import {catchError} from 'rxjs/internal/operators/catchError';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class ReviewEffects {
  constructor(private service: ProductService,
              private action$: Actions) {
  }
  @Effect()
  loadReview$ = this.action$.pipe(
      ofType(ReviewActionTypes.LoadReview),
      mergeMap((loadReview: LoadReview) =>
        this.service.getReviews(loadReview.payload as number, '/api/reviews')
          .pipe(
            map((reviews: ReviewState) => new LoadReviewSuccess(reviews)),
            catchError(error => of(new LoadReviewFail(error.message)))
      )
    )
  );
}
