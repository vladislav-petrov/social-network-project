import { combineReducers } from 'redux';
import { goToIdReducer } from './feautures/goToId/goToIdSlice';
import { usersReducer } from './feautures/users/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
  goToId: goToIdReducer
});

export default rootReducer;
