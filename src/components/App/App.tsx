import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as ReactDOM from 'react-dom';
import * as styles from './App.css';
import *  as _ from 'lodash';
import Counter from '../Counter/Counter';
import { incrementCounter } from '../../actions';

interface AppProps {
  counter: any;
  dispatch: Dispatch<any>
}

class App extends React.Component<AppProps, void> {
  render() {
    const { counter, dispatch } = this.props;

    return (
      <div className={styles.app}>
        <h2>Hello fafa, how are you? {_.startCase('coucou johnny')}</h2>
        <h3>run into a react component</h3>
        <Counter
          value={counter.value}
          increment={() => dispatch(incrementCounter(1))}
          reset={() => { } }
          />
      </div>
    )
  }
};

const mapStateToProps = (state: any) => ({
  counter: state.counter
});

export default connect(mapStateToProps)(App);