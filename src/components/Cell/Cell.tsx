import * as React from 'react';

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
    let className = 'cell ';
    if (value === 0) className += 'empty';
    if (value === 1) className += 'red-disc';
    if (value === 2) className += 'blue-disc';

    return (
      <div className={className} onClick={this.onClickHandle.bind(this)} />
    );
  }
}