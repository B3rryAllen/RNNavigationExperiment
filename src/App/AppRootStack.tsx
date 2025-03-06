import HomeScreen, {HomeProps} from './private/HomeScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DetailsScreen from './private/DetailsScreen.tsx';

export type RootStackParamList = {
    Home: HomeProps;
    Details: undefined;
};

const NativeStack = createNativeStackNavigator<RootStackParamList>();

function AppRootStack() {
    const user = {
        username: 'massimo.delorenzo@gmail.com',
    };

    return (
        <NativeStack.Navigator initialRouteName="Home">
            <NativeStack.Screen
                name="Home"
                initialParams={{username: user.username}}>
                {props => <HomeScreen {...props} />}
            </NativeStack.Screen>
            <NativeStack.Screen name="Details">
                {props => <DetailsScreen {...props} />}
            </NativeStack.Screen>
        </NativeStack.Navigator>
    );
}

export default AppRootStack;
