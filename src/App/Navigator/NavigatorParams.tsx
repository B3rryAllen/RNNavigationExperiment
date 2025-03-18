import {HomeProps} from "../Private/Home/HomeScreen.tsx";
import {DetailsScreenProps} from "../Private/DetailsScreen.tsx";

export type Screens = 'Username' | 'Password';

export type NavigatorParams = {
    [K in Screens]: K extends 'Username'
        ? HomeProps
        : K extends 'Details'
            ? DetailsScreenProps
            : K extends 'CreatePost'
                ? undefined
                : never;
};
