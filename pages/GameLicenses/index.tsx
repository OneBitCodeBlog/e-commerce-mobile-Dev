import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/core';
import Game from '../../DTOs/game';

const GameLicenses: React.FC = () => {
  const navigation = useNavigation();

  const product = navigation.getState().routes[1]?.params as Game;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Image 
        source={{ uri: product?.image_url }}
        style={styles.image}
      />
      
      <View>
        <Text style={styles.title}>
          { product?.name }
        </Text>

        <Text style={styles.description}>
          { product?.description }
        </Text>
      </View>

      <Text style={styles.title}>Chaves</Text>
      <View style={styles.keysContainer}>
        {
          product?.licenses?.map(
            (license, index) => 
              <Text
                style={styles.key}
                selectable={true}
                key={index}
              >
                {index+1} - {license}
              </Text>
          )
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#262c49'
  },
  content: {
    padding: 10,
    backgroundColor: '#262c49',
    marginBottom: 15
  },
  image: {
    borderRadius: 5,
    alignSelf: 'center',
    height: 200,
    width: 300
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  description: {
    color: '#fff'
  },
  keysContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#10163a',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20
  },
  key: {
    color: '#fff',
    marginVertical: 10
  }
});

export default GameLicenses;