import * as React from 'react';
import * as styles from './Cell.scss';

interface CellProps {
  onClick: (column: number) => any;
  onMouseEnter: (column: number) => any;
  isProjection?: boolean;
  value: number;
  column: number;
}

export default class Cell extends React.Component<CellProps, void> {
  onClickHandle() {
    this.props.onClick(this.props.column);
  }

  onMouseEnterHandle() {
    this.props.onMouseEnter(this.props.column);
  }

  render() {
    const { value, onClick, column, isProjection } = this.props;
    let className = `${styles.cell} `;
    if (value === 0) className += `${styles.empty}`;
    if (value === 1) className += `${styles.redDisc}`;
    if (value === 2) className += `${styles.yellowDisc}`;
    if (isProjection) className += ` ${styles.projection}`;

    return (
      <div className={className} onClick={this.onClickHandle.bind(this)} onMouseEnter={this.onMouseEnterHandle.bind(this)} />
    );
  }
}