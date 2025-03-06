import {Button, Text, View} from 'react-native';
import {memo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppRootStack.tsx';

export type DetailsNativeStackScreenProps = NativeStackScreenProps<
    RootStackParamList,
    'Home'
>;

const Home = memo(function Home({navigation}: DetailsNativeStackScreenProps) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome to details page</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
            <Button
                title="Go to Home"
                onPress={() =>
                    navigation.popTo('Home', {username: 'massimo.delorenzo@proton.me'})
                }
            />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
});

export default Home;
