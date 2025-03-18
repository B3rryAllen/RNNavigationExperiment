import { Button } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen.tsx';
import { NativeStack } from '../../AppNavigator.tsx';
import HomeStackTitle from './HomeStackTitle.tsx';

const user = {
    username: 'massimo.delorenzo@gmail.com',
};

function HomeStack() {
    return (
        <NativeStack.Screen
            name="Home"
            initialParams={{username: user.username}}
            options={{
                headerTitle: () => <HomeStackTitle />,
                headerRight: () => <Button title="Update" />,
            }}>
            {props => <HomeScreen {...props} />}
        </NativeStack.Screen>
    );
}

export default HomeStack;
