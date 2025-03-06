/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRootStack from './AppRootStack.tsx';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AppRootStack />
    </NavigationContainer>
  );
}

export default App;
