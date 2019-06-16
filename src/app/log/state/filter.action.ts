import {Action} from '@ngrx/store';

export enum FilterAction  {
  logFilter = '[Filter] Log',
  logFilterComplete = '[Filter] Log complete'
}

export class LogFilterAction implements Action {
  public readonly type = FilterAction.logFilter;
  constructor(public payload: any) {
  }
}

export class LogFilterCompleteAction implements Action {
  public readonly type = FilterAction.logFilterComplete;
  constructor(public payload: any) {
  }
}

export type FilterActionType = LogFilterAction | LogFilterCompleteAction;
