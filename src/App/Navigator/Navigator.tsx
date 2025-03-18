import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigatorParams} from './NavigatorParams.tsx';
import UsernameStack from '../Public/Username/UsernameStack.tsx';

export const NativeStack = createNativeStackNavigator<NavigatorParams>();

function Navigator() {
    return (
        <NativeStack.Navigator
            initialRouteName="Username"
            screenOptions={{
                headerShown: false,
            }}
        >
            {UsernameStack()}
        </NativeStack.Navigator>
    );
}

export default Navigator;
