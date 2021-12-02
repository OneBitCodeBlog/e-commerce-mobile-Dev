import api from './api';
import ListProduct from '../DTOs/listProduct';
import Product from '../DTOs/product';

interface ProductIndexResponse {
  products: ListProduct[];
}

interface ProductShowResponse {
  product: Product;
}

const ProductService = {
  index: (url: string) => {
    return api.get<ProductIndexResponse>(url)
      .then(resp => resp.data.products);
  },
  show: (url: string) => {
    return api.get<ProductShowResponse>(url)
      .then(resp => resp.data.product);
  }
}

export default ProductService;