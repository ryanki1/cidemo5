import { UserState } from '../user/state/user.reducer';
import { LogState } from '../log/state/log.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  user: UserState;
  log: LogState;
}
