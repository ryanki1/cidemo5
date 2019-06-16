import {Actions, Effect, ofType} from '@ngrx/effects';
import {FilterAction, LogFilterAction, LogFilterCompleteAction} from './filter.action';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Injectable()
export class LogFilterEffects {
  constructor(private action$: Actions) {
  }
  @Effect()
  onFilterChange$: Observable<Action>  = this.action$.pipe(
      ofType(FilterAction.logFilter),
      map((action: LogFilterAction) => new LogFilterCompleteAction(action.payload))
    );
}
