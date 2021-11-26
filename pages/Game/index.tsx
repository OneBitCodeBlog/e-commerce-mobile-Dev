import React from 'react';
import { View, Text } from 'react-native';

const Games: React.FC = () => {
  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: '#10163a', 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ color: '#fff', fontSize: 26 }}>Games</Text>
    </View>
  );
}

export default Games;