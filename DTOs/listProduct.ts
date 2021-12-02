import Product from "./product";

type ListProduct = 
  Pick<Product, 'id' | 'name' | 'description' | 'image_url'>;

export default ListProduct;