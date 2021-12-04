import React, { useEffect } from 'react';
import ProductList from '../../components/ProductList';

import useSWR from 'swr';
import WishlistService from '../../services/wishlist';

const Wishlist: React.FC = () => {
  const { data, error } = useSWR(
    'storefront/v1/wish_items',
    WishlistService.index
  );

  useEffect(() => {
    if (error) {
      alert(error);
      console.log(error);
    }
  }, [error])

  return (
    <ProductList
      products={ data?.wish_items }
      type="wishlist"
    />
  );
}

export default Wishlist;