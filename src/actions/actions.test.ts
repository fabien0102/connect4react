import * as actions from './index';

describe('actions', () => {
  it('should create an action to increment counter', () => {
    const expected = { type: 'INCREMENT_COUNTER', payload: { delta: 1 } };
    expect(actions.incrementCounter(1)).toEqual(expected);
  });

  it('should create an action to reset counter', () => {
    const expected = { type: 'RESET_COUNTER' };
    expect(actions.resetCounter()).toEqual(expected);
  });
});