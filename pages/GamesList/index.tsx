import React from 'react';
import ProductList from '../../components/ProductList';

const GamesList: React.FC = () => {
  return (
    <ProductList
      products={[1, 2, 3, 4, 5, 6]}
      type="games"
    />
  );
}

export default GamesList;