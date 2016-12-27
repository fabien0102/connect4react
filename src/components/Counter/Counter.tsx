import * as React from 'react';

interface CounterProps {
  increment: () => any,
  reset: () => any,
  value: number
}

export default class Counter extends React.Component<CounterProps, void> {
  render() {
    const { value, increment } = this.props;

    return (
      <div className="counter">
        {value}
        <button onClick={increment.bind(this)}>+</button>
      </div>
    );
  }
}