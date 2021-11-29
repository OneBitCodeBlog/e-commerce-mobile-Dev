import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Product from '../Product';

interface ProductListProps {
  products: Array<number>;
  type?: 'home' | 'games' | 'wishlist';
}

const ProductList: React.FC<ProductListProps> = ({ products, type = 'home' }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.content}
        data={products}
        keyExtractor={product => product.toString()}
        renderItem={({item}) => {
          return  <Product type={type}/> 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 5,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10163a'
  },
  content: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    marginHorizontal: 20,
    width: '95%'
  }
});

export default ProductList;