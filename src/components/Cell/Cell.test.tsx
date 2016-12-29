import * as React from 'react';
import { shallow } from 'enzyme';
import Cell from './Cell';
import * as styles from './Cell.scss';
import 'jest';

describe('Cell component', () => {

  let onClick: jest.Mock<(column: number) => void>;
  let onMouseEnter: jest.Mock<(column: number) => void>;

  beforeEach(() => {
    onClick = jest.fn<(column: number) => void>();
    onMouseEnter = jest.fn<(column: number) => void>();
  });

  it('should have red disc class if value is 1', () => {
    const cell = shallow(<Cell value={1} column={0} onClick={onClick} onMouseEnter={onMouseEnter}/>);
    expect(cell.hasClass(styles.cell)).toBeTruthy();
    expect(cell.hasClass(styles.redDisc)).toBeTruthy();
  });

  it('should have yellow class if value is 2', () => {
    const cell = shallow(<Cell value={2} column={0} onClick={onClick} onMouseEnter={onMouseEnter}/>);
    expect(cell.hasClass(styles.cell)).toBeTruthy();
    expect(cell.hasClass(styles.yellowDisc)).toBeTruthy();
  });

  it('should call onClick on click', () => {
    const cell = shallow(<Cell value={0} column={0} onClick={onClick} onMouseEnter={onMouseEnter}/>);
    expect(onClick.mock.calls.length).toEqual(0);
    cell.simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });

  it('should call onMouseEnter on mouse enter', () => {
    const cell = shallow(<Cell value={0} column={0} onClick={onClick} onMouseEnter={onMouseEnter}/>);
    expect(onMouseEnter.mock.calls.length).toEqual(0);
    cell.simulate('mouseenter');
    expect(onMouseEnter.mock.calls.length).toEqual(1);
  });
});