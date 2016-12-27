import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { get } from 'lodash';

import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

// store
import { createStore } from 'redux';
import rootReducer from './reducers';
const reduxDevtool: Function = get(window, '__REDUX_DEVTOOLS_EXTENSION__') as Function;
const store = createStore(rootReducer, reduxDevtool && reduxDevtool());

import App from './components/App/App';

const render = (Component: any) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    const NewApp = require('./components/App/App').default
    render(NewApp)
  });
}