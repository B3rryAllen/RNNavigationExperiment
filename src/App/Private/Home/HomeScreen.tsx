import {Alert, Button, Text, View} from 'react-native';
import React, {memo} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigatorParams} from "../../Navigator/NavigatorParams.tsx";

export interface HomeProps {
    username?: string;
    post?: string;
}

/*
export type HomeNativeStackScreenProps = NativeStackScreenProps<
    NavigatorParams,
    'Home'
>;

const HomeScreen = memo(function Home({
    route,
    navigation,
}: HomeNativeStackScreenProps) {
    const [count, setCount] = React.useState(0);

    // Use an effect to monitor the update to params
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
            Alert.alert('New Post', route.params?.post, [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    }, [route.params?.post]);

    React.useEffect(() => {
        // Use `setOptions` to update the button that we previously specified
        // Now the button includes an `onPress` handler to update the count
        navigation.setOptions({
            headerRight: () => (
                <Button
                    title="Update count "
                    onPress={() => setCount(c => c + 1)}
                />
            ),
        });
    }, [navigation]);

    const {username} = route.params;

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome {username}</Text>
            <Button
                title="Go to Details"
                onPress={() =>
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })
                }
            />

            <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            />

            <Text style={{margin: 10}}>Post: {route.params?.post}</Text>

            <Text>Count: {count}</Text>
        </View>
    );
});

export default HomeScreen;

 */
