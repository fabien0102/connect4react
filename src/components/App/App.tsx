import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as ReactDOM from 'react-dom';
import * as styles from './App.css';
import *  as _ from 'lodash';
import Counter from '../Counter/Counter';
import { } from '../../actions/actions';

interface AppProps {
  game: any;
  dispatch: Dispatch<any>;
}

export class App extends React.Component<AppProps, void> {
  render() {
    const { game, dispatch } = this.props;

    return (
      <div className={styles.app}>
        <h2>Hello fafa, how are you? {_.startCase('coucou johnny')}</h2>
        <h3>run into a react component</h3>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  game: state.game
});

export default connect(mapStateToProps)(App);