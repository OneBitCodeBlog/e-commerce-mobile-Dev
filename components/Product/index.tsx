import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import ListProduct from '../../DTOs/listProduct';
import Game from '../../DTOs/game';

interface ProductProps {
  type?: 'home' | 'games' | 'wishlist';
  product: ListProduct;
};

const Product: React.FC<ProductProps> = memo(({ type = 'home', product }) => {
  const icon = 
    type === 'wishlist' ? 'heart' : 
    type === 'games' ? 'key' : 'info-circle';

  const iconStyle = type === 'wishlist' ? styles.redIcon : styles.icon;

  const navigation = useNavigation();

  const handleIconPress = () => {
    switch(type) {
      case 'wishlist':
        break;
      case 'games':
        navigation.navigate('GameLicenses', product as Game);
        break;
      default: 
        navigation.navigate('ProductInfo', product);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product?.image_url }}/>

      <View style={styles.header}>
        <Text style={styles.title}>{ product?.name }</Text>

        <TouchableOpacity onPress={handleIconPress}>
          <FontAwesomeIcon icon={icon} style={iconStyle} size={20}/>
        </TouchableOpacity>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        { product?.description }
      </Text>
    </View>
  );  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    maxHeight: 290,
    minHeight: 290,
    backgroundColor: '#262c49',
    marginBottom: 15
  },
  image: {
    flex: 1,
    maxHeight: 200,
    minHeight: 200,
    width: '100%',
    marginBottom: 5,
    borderRadius: 5
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    color: '#fff',
    flex: 1
  },
  icon: {
    color: '#fff',
    marginBottom: 5
  },
  redIcon: {
    color: '#f22',
    marginBottom: 5
  }
});

export default Product;