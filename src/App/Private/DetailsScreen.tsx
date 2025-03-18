import {Button, Text, View} from 'react-native';
import {memo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigatoeParamList} from '../AppNavigator.tsx';

export type DetailsScreenProps = {
    itemId: number;
    otherParam: string;
}

export type DetailsNativeStackScreenProps = NativeStackScreenProps<
    AppNavigatoeParamList,
    'Details'
>;

const DetailsScreen = memo(function DetailsScreens({navigation, route}: DetailsNativeStackScreenProps) {

    const { itemId, otherParam } = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome to details page</Text>
            <Text>Details Screen</Text>
            <Text>itemId: {itemId}</Text>
            <Text>otherParam: {otherParam}</Text>

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

export default DetailsScreen;
