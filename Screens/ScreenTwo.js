import React from 'react';
import { Button, Text, View } from 'react-native';

const ScreenTwo = ({navigation}) => {
  const twoImage = require('../assets/screens/Two.jpeg')


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Your ScreenTwo</Text>
      <Button title="Go Back to Home" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ScreenTwo;
