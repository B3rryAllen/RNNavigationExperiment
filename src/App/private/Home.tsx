import {Text, View} from 'react-native';
import {memo} from 'react';

const Home = memo(function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
});

export default Home;
