import { createAction } from 'redux-actions';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';

export const incrementCounter = createAction(
    INCREMENT_COUNTER,
    (delta: number) => ({ delta })
);

export const resetCounter = createAction(
    RESET_COUNTER,
    () => { }
);