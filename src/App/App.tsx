/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './Navigator/Navigator';
import {ApplicationProvider} from '@ui-kitten/components';
import brTheme from './BrTheme.ts';

function App(): React.JSX.Element {
    return (
        <ApplicationProvider {...eva} theme={{...eva.light, ...brTheme}}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </ApplicationProvider>
    );
}

export default App;
