import Product from './product';

type Game = {
  licenses: string[];
} & Pick<Product, 'id' | 'name' | 'description' | 'image_url'>;

export default Game;