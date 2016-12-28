import * as React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';
import 'jest';

describe('Cell component', () => {

  let onClick: jest.Mock<(column: number) => any>;

  beforeEach(() => {
    onClick = jest.fn<(column: number) => any>();
  });

  it('should have `empty` class if value is 0', () => {
    const cell = shallow(<Cell value={0} column={0} onClick={onClick} />);
    expect(cell.hasClass('cell')).toBeTruthy();
    expect(cell.hasClass('empty')).toBeTruthy();
  });

  it('should have `red-disc` class if value is 1', () => {
    const cell = shallow(<Cell value={1} column={0} onClick={onClick} />);
    expect(cell.hasClass('cell')).toBeTruthy();
    expect(cell.hasClass('red-disc')).toBeTruthy();
  });

  it('should have `blue-disc` class if value is 2', () => {
    const cell = shallow(<Cell value={2} column={0} onClick={onClick} />);
    expect(cell.hasClass('cell')).toBeTruthy();
    expect(cell.hasClass('blue-disc')).toBeTruthy();
  });

  it('should call onClick on click', () => {
    const cell = shallow(<Cell value={0} column={0} onClick={onClick} />);
    expect(onClick.mock.calls.length).toEqual(0);
    cell.simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });
});