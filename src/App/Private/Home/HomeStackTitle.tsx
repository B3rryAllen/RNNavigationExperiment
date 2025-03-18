import {Image} from "react-native";
import React from "react";

function HomeStackTitle() {
    return (
        <Image
            style={{width: 50, height: 50}}
            source={require('@assets/react-native-icon.png')}
        />
    );
}

export default HomeStackTitle;
