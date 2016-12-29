import actionCreatorFactory from 'redux-typescript-actions';
const createAction = actionCreatorFactory();

export const ADD_DISC = 'ADD_DISC';
export interface AddDiscPayload {
    column: number;
}
export const addDisc = createAction<AddDiscPayload>(ADD_DISC);

export const PROJECT_NEXT_MOVE = 'PROJECT_NEXT_MOVE';
export interface ProjectNextMovePayload {
    column: number;
}
export const projectNextMove = createAction<ProjectNextMovePayload>(PROJECT_NEXT_MOVE);

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({ type: NEW_GAME });