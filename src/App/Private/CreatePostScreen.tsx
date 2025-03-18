import React, {memo} from 'react';
import {Button, TextInput} from 'react-native';
import {CreatePostStackScreenProps} from './CreatePost/CreatePostStackScreenProps.tsx';

const CreatePostScreen = memo(function CreatePostScreen({
    navigation,
}: CreatePostStackScreenProps) {
    const [postText, setPostText] = React.useState('');

    return (
        <>
            <TextInput
                multiline
                placeholder="What's on your mind?"
                style={{height: 200, padding: 10, backgroundColor: 'white'}}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                disabled={!postText?.length}
                onPress={() => {
                    // Pass parScrams back to home screen
                    navigation.navigate('Home', {post: postText});
                }}
            />
        </>
    );
});

export default CreatePostScreen;
