import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  text: string;
}

const Badge: React.FC<BadgeProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#10163a',
    marginHorizontal: 10
  },
  text: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Badge;