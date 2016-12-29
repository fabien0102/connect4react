import * as React from 'react';
import * as styles from './Cell.css';

interface CellProps {
  onClick: (column: number) => any;
  value: number;
  column: number;
}

export default class Cell extends React.Component<CellProps, void> {
  onClickHandle() {
    this.props.onClick(this.props.column);
  }

  render() {
    const { value, onClick, column } = this.props;
    let className = `${styles.cell} `;
    if (value === 0) className += `${styles.empty}`;
    if (value === 1) className += `${styles.redDisc}`;
    if (value === 2) className += `${styles.yellowDisc}`;

    return (
      <div className={className} onClick={this.onClickHandle.bind(this)} />
    );
  }
}