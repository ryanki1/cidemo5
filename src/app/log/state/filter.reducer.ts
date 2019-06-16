import {FilterAction, FilterActionType} from './filter.action';

export interface LogFilter {
  field: string;
  operator: string;
  value: string;
}

export interface LogFilterState {
  filter: {
    logic: 'or' | 'and',
    filters: LogFilter[]
  };
}

export const initialFilterState: LogFilterState = {
  filter: {
    logic: 'and',
    filters: []
  }
}

export function filterReducer(state: LogFilterState = initialFilterState, action: FilterActionType) {
  switch (action.type) {
    case FilterAction.logFilterComplete:
      state = {...state, filter: action.payload.filter};
      break;
    default:
      break;
  }
  return state;
}
