import {createFeatureSelector, createSelector, MemoizedSelector, State} from '@ngrx/store';
import * as fromLogs from './log.reducer';
import {Log} from './log.reducer';
import {LogFilter, LogFilterState} from './filter.reducer';
import {DataResult, process} from '@progress/kendo-data-query';
import * as fromFilterReducer from './filter.reducer';

const getLogsFeatureState = createFeatureSelector<fromLogs.LogState>('logs');
const getLogFilterFeatureState = createFeatureSelector<LogFilterState>('filters')

export const getAllLogs: MemoizedSelector<object, Log[]> = createSelector(
  getLogsFeatureState,
  state => state && state.logs ? state.logs : []
);

export const getLogsFilter: MemoizedSelector<object, LogFilterState> = createSelector (
  getLogFilterFeatureState,
  state => state ? state : fromFilterReducer.initialFilterState,
);

export const getFilteredLogs: MemoizedSelector<object, any> = createSelector (
  getAllLogs,
  getLogsFilter,
  (logs: Log[], logFilterState: LogFilterState): any => {
    const result: Log[] | DataResult = !!logFilterState.filter.filters.length ? process(logs, logFilterState) : logs;
    return result;
  }
)
