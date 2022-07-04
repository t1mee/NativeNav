import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './App';
import {name as appName} from './app.json';
import {rootReducer} from './src/reducers/rootReducer';

const store = createStore(rootReducer);

const Apps = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Apps);
