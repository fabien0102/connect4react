import { handleActions, Action } from 'redux-actions';
import { AppStore } from '../store';
import {
    INCREMENT_COUNTER,
    RESET_COUNTER,
    IncrementCounterPayload
} from '../actions/actions';

const initialState: AppStore.Counter = { value: 0 };

export default handleActions<AppStore.Counter | IncrementCounterPayload | void>({
    [INCREMENT_COUNTER]: (state: AppStore.Counter, action: Action<IncrementCounterPayload>): AppStore.Counter => {
        return { value: state.value + action.payload.delta || 1 };
    },

    [RESET_COUNTER]: (state: AppStore.Counter, action: Action<void>): AppStore.Counter => {
        return { value: 0 };
    }
}, initialState);
