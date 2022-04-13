import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/router';
import {Provider} from 'react-redux';
import persistedStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
export default function App() {
  const {store, persistor} = persistedStore();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}
