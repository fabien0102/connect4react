import { createStore, Store } from 'redux';
import rootReducer from './reducers/reducers';
import { get } from 'lodash';

export declare namespace AppStore {
    type Counter = { value: number };
    type All = {
        counter: Counter;
    };
}

const reduxDevtool: Function = get(window, '__REDUX_DEVTOOLS_EXTENSION__') as Function;
export const store: Store<AppStore.All> = createStore(rootReducer, reduxDevtool && reduxDevtool());