import React, { useEffect } from 'react';
import ProductList from '../../components/ProductList';

import GameService from '../../services/game';
import useSWR from 'swr';

const GamesList: React.FC = () => {
  const { data, error } = useSWR(
    'storefront/v1/games',
    GameService.index
  );

  useEffect(() => {
    if (error) {
      alert(error);
      console.log(error);
    }
  }, [error])

  return (
    <ProductList
      products={ data?.games }
      type="games"
    />
  );
}

export default GamesList;