import * as fromLog from './log.action';

export interface Log {
  action: string;
  timestamp: Date;
  user: string;
}

export interface LogState {
  logs: Log[];
}

const initialState: LogState = {
  logs: []
};

export function logReducer(state: LogState = initialState, action: fromLog.LogActionType) {
  switch (action.type) {
    case fromLog.LogAction.logUserLogon:
      return state;
      break;
    case fromLog.LogAction.logUserLogonComplete:
      return {...state, logs: [...state.logs, action.payload]};
      break;
    case fromLog.LogAction.logUserLogoff:
      return state;
      break;
    case fromLog.LogAction.logUserLogoffComplete:
      return {...state, logs: [...state.logs, action.payload]};
      break;
    case fromLog.LogAction.logProductSelect:
      return state;
      break;
    case fromLog.LogAction.logFilterChange:
      return {...state, filter: action.payload};
      break;
    default:
      return state;
      break;
  }
}
