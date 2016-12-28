import { createStore, Store } from 'redux';
import rootReducer from './reducers/reducers';
import { get } from 'lodash';

export enum Case { Empty = 0, Player1 = 1, Player2 = 2 };

export declare namespace AppStore {
    type Game = {
        board: Array<Array<Case>>;
        winner?: string;
        currentPlayer: number;
    };
    type All = {
        game: Game;
    };
}

const reduxDevtool: Function = get(window, '__REDUX_DEVTOOLS_EXTENSION__') as Function;
export const store: Store<AppStore.All> = createStore(rootReducer, reduxDevtool && reduxDevtool());