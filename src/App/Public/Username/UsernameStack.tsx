
import React from 'react';
import UsernameScreen from './UsernameScreen.tsx';
import {NativeStack} from '../../Navigator/Navigator.tsx';

function HomeStack() {
    return (
        <NativeStack.Screen name="Username">
            {() => <UsernameScreen />}
        </NativeStack.Screen>
    );
}

export default HomeStack;
