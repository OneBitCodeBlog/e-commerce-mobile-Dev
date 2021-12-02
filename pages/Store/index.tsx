import React from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import ProductList from '../../components/ProductList';

const Store = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input />
        <Button icon="search" width="15%"/>
      </View>

      <ProductList products={[1,2,3,4,5]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 5,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#10163a'
  },
  header: {
    flex: 0,
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -20
  }
});

export default Store;