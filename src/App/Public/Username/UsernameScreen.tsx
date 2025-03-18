import {View} from 'react-native';
import {Button, Text} from '@ui-kitten/components';

function UsernameScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Username Screen</Text>
            <Button>Home</Button>
        </View>
    );
}

export default UsernameScreen;
