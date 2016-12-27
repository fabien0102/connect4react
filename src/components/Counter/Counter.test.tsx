import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';
import 'jest';

describe('Counter component', () => {

  const increment = jest.fn();
  const value = 10;
  const counter = shallow(<Counter value={value} increment={increment} />);

  it('should have value set', () => {
    expect(counter.text()).toEqual('10+');
  });

  it('should call increment fn on click', () => {
    counter.find('button').simulate('click');
    expect(increment.mock.calls.length).toEqual(1);
  });
});