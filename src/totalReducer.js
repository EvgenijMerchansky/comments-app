import { combineReducers } from 'redux';

import testReducer from './reducers/testReducer';
import responseReducer from './reducers/responseReducer';

const reducers = combineReducers({
  responseReducer,
  testReducer
});

export default reducers;
