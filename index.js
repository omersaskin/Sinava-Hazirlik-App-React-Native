import {AppRegistry, LogBox, Text} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';

import { store, persistor } from "./redux/store";
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react'

const RNRedux = () => (
  <Provider store = { store }>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)

LogBox.ignoreLogs(["EventEmitter.removeListener"]);

AppRegistry.registerComponent(appName, () => RNRedux);