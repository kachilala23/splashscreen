import { View, Text } from 'react-native';
import React from 'react';

import SplashScreen from 'react-native-splash-screen';

const App = () => {

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default App;

