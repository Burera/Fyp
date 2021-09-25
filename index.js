/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
