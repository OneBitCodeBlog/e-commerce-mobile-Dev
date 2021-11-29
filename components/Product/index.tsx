import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import productImage from '../../assets/product_image.png';

interface ProductProps {
  type?: 'home' | 'games' | 'wishlist';
};

const Product: React.FC<ProductProps> = ({ type = 'home' }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={productImage}/>

      <View style={styles.header}>
        <Text style={styles.title}>Product</Text>

        <TouchableOpacity>
          <FontAwesomeIcon icon="info-circle" style={styles.icon} size={20}/>
        </TouchableOpacity>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        Voluptatibus rerum esse. Amet error reiciendis 
        totam laudantium molestiae in. Et accusantium optio sit.
      </Text>
    </View>
  );  
}

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
    marginBottom: 10,
    borderRadius: 5
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:10
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  description: {
    color: '#fff',
    flex: 3
  },
  icon: {
    color: '#fff',
    marginBottom: 5
  }
});

export default Product;