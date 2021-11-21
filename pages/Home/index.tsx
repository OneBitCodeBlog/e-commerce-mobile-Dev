import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#10163a'
      }}
    >
      <Text style={{fontSize: 20, color: '#fff'}}>Home</Text>
    </View>

  );
}

export default Home;