/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './screens/MyTabs';
import GlobalContextProvider from './context/GlobalContext';
import AuthContextProvider from './context/AuthContext';

const App = () => {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </AuthContextProvider>
    </GlobalContextProvider>
  );
};

export default App;
