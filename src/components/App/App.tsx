import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './App.css';
import *  as _ from 'lodash';

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div className={styles.app}>
        <h2>Hello fafa, how are you? {_.startCase('coucou johnny')}</h2>
        <h3>run into a react component</h3>
      </div>
    )
  }
};