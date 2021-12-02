import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

import ProductList from '../../components/ProductList';

import ProductService from '../../services/product';
import ListProduct from '../../DTOs/listProduct';
import useSWR from 'swr';

import UrlService from '../../util/urlService';

const defaultUrl = '/storefront/v1/products';

const Store = () => {
  const [products, setProducts] = useState<ListProduct[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [url, setUrl] = useState(defaultUrl);

  const { data, error } = useSWR(
    url,
    ProductService.index
  );

  const handleUpdate = async() => {
    let pg = Math.floor(products.length / 10 + 1);

    if (pg > 1 && pg !== page) {
      setIsLoading(true);
      setPage(pg);

      setUrl(defaultUrl + UrlService.execute({ page: pg, search }));
      setTimeout(() => setIsLoading(false), 1500);
    }
  }

  const handleSearch = async() => {
    setIsLoading(true);
    
    setProducts([]);
    setPage(1);
    setUrl(defaultUrl + UrlService.execute({ page, search }));

    setTimeout(() => setIsLoading(false), 1500);
  }

  useEffect(() => {
    if (products && data && !data?.some(d => products.includes(d))) {
      let prods = [...products, ...data];
      setProducts(prods);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error);
      console.log(error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input 
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
        <Button 
          icon="search" 
          width="15%"
          onPress={handleSearch}
        />
      </View>

      <ProductList 
        products={products}
        handleUpdate={handleUpdate}
        isLoading={isLoading}
      />
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
    marginBottom: -10
  }
});

export default Store;