import { handleActions, Action } from 'redux-actions';
import {
    INCREMENT_COUNTER,
    RESET_COUNTER
} from '../actions';

const initialState: Store.Counter = { value: 0 };

export default handleActions<Store.Counter | { delta: number } | void>({
    [INCREMENT_COUNTER]: (state: Store.Counter, action: Action<{ delta: number }>): Store.Counter => {
        return { value: state.value + action.payload.delta || 1 };
    },

    [RESET_COUNTER]: (state: Store.Counter, action: Action<void>): Store.Counter => {
        return { value: 0 };
    }
}, initialState);
