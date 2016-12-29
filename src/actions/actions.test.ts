import * as actions from './actions';

describe('actions', () => {
  it('should create an action to add a disc', () => {
    const expected = { type: 'ADD_DISC', payload: { column: 2 } };
    expect(actions.addDisc({ column: 2 })).toEqual(expected);
  });

  it('should create an action to project next move', () => {
    const expected = { type: 'PROJECT_NEXT_MOVE', payload: { column: 2 } };
    expect(actions.projectNextMove({ column: 2 })).toEqual(expected);
  });

  it('should create an action for request a new game', () => {
    const expected = { type: 'NEW_GAME'};
    expect(actions.newGame()).toEqual(expected);
  });
});