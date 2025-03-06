import {Button, Text, View} from 'react-native';
import {memo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppRootStack.tsx';

export interface HomeProps {
    username: string;
}

export type HomeNativeStackScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Home'
>;

const HomeScreen = memo(function Home({
    route,
    navigation,
}: HomeNativeStackScreenProps) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome {route.params.username}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
});

export default HomeScreen;
