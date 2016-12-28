import * as actions from './actions';

describe('actions', () => {
  it('should create an action to add a disc', () => {
    const expected = { type: 'ADD_DISC', payload: {column: 2, player: 1}};
    expect(actions.addDisc({column: 2, player: 1})).toEqual(expected);
  });
});