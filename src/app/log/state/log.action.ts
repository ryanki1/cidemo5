import {Action} from '@ngrx/store/src/models';
import {Product} from '../../products/product';
import {Log} from './log.reducer';

export enum LogAction {
  logUserLogon = '[Log] User Logon',
  logUserLogoff = '[Log] User Logoff',
  logProductSelect = '[Log] Product select',
  logUserLogonComplete = '[Log] User Logon Complete',
  logUserLogoffComplete = '[Log] User Logoff Complete',
  logFilterChange = '[Log] User Filter Change'
}


export class LogUserLogonAction implements Action {
  readonly type: string = LogAction.logUserLogon;
  constructor(public payload: string) {
  }
}

export class LogUserLogonActionComplete implements Action {
  readonly type: string = LogAction.logUserLogonComplete;
  constructor(public payload: Log) {
  }
}

export class LogUserLogoffAction implements Action {
  readonly type: string = LogAction.logUserLogoff;
  constructor(public payload: string) {
  }
}

export class LogUserLogoffActionComplete implements Action {
  readonly type: string = LogAction.logUserLogoffComplete;
  constructor(public payload: Log) {
  }
}

export class LogProductSelectAction implements Action {
  readonly type: string = LogAction.logProductSelect;
  constructor(public payload: Product) {
  }
}

export class LogFilterChange implements Action {
  readonly type = LogAction.logFilterChange;
  constructor(public payload: Log) {
  }
}

export type LogActionType = LogUserLogonAction |
  LogUserLogoffAction |
  LogProductSelectAction |
  LogUserLogonActionComplete |
  LogFilterChange;
