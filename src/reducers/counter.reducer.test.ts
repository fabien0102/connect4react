import counter from './counter.reducer';
import * as actions from '../actions';

describe('counter reducer', () => {
  it('should increment the counter', () => {
    expect(counter(undefined, actions.incrementCounter(1)))
      .toEqual({ value: 1 });

    expect(counter({ value: 1 }, actions.incrementCounter(1)))
      .toEqual({ value: 2 });

    expect(counter({ value: 2 }, actions.incrementCounter(2)))
      .toEqual({ value: 4 });
  });
});

describe('counter reset', () => {
  it('should reset the counter', () => {
    expect(counter(undefined, actions.resetCounter()))
      .toEqual({ value: 0 });

    expect(counter({ value: 10 }, actions.resetCounter()))
      .toEqual({ value: 0 });
  });
});