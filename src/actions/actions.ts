import actionCreatorFactory from 'redux-typescript-actions';
const createAction = actionCreatorFactory();

export const ADD_DISC = 'ADD_DISC';
export interface AddDiscPayload {
    column: number;
}
export const addDisc = createAction<AddDiscPayload>(ADD_DISC);