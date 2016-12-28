import { combineReducers } from 'redux';
import counter from './counter.reducer';

const rootReducer = combineReducers({ counter });

export default rootReducer;