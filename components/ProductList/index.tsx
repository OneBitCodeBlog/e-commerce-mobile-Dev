import React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import Product from '../Product';
import ListProduct from '../../DTOs/listProduct';

interface ProductListProps {
  products: ListProduct[];
  type?: 'home' | 'games' | 'wishlist';
  handleUpdate?: any;
  isLoading?: boolean;
}

const ProductList: React.FC<ProductListProps> = 
  ({ products, type = 'home', handleUpdate, isLoading = false }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.content}
        data={products}
        keyExtractor={product => product?.id?.toString()}
        renderItem={({item}) => {
          return  <Product product={item} type={type}/> 
        }}
        onEndReached={handleUpdate}
        ListFooterComponent={() => (
          isLoading ?
            <ActivityIndicator size="large" color="white"/> :
            <></>
        )}
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