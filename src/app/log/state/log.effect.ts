import {Injectable} from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';

import {LogAction, LogUserLogoffAction, LogUserLogoffActionComplete, LogUserLogonActionComplete} from './log.action';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as fromLogAction from './log.action';
import * as fromReducer from './log.reducer';
import {Log, LogState} from './log.reducer';

@Injectable()
export class LogEffects {
  private logPayload: Log;
  constructor(private action$: Actions,
              private store: Store<LogState>) {
  }

  private constructNewLog(action: string, user: string): fromReducer.Log {
    const newLog: fromReducer.Log = {
      action: action,
      timestamp: new Date(),
      user: user
    };
    return newLog;
  }

  @Effect()
  logUserLogon$: Observable<Action> = this.action$.pipe(
    ofType(fromLogAction.LogAction.logUserLogon),
    map((action: fromLogAction.LogUserLogonAction) => {
      const newLog: fromReducer.Log = this.constructNewLog(
        fromLogAction.LogAction.logUserLogon,
        action.payload
      );
      return new LogUserLogonActionComplete(newLog);
    })
  );

  @Effect()
  logUserLogoff$: Observable<Action> = this.action$.pipe(
    ofType(LogAction.logUserLogoff),
    map((action: LogUserLogoffAction) => {
      const newLog: Log = this.constructNewLog(
        LogAction.logUserLogoff,
        action.payload
      );
      return new LogUserLogoffActionComplete(newLog);
    })
  );
}
