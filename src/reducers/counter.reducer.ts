import { Action } from '../actions';

const initialState: Store.Counter = { value: 0 };

// TODO use redux-action for a better syntax
function counter(state: Store.Counter = initialState, action: Action) {
    const {value} = state;
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { value: value + action.delta };

        case 'RESET_COUNTER':
            return { value: 0 };
    }
    return state;
}

export default counter;