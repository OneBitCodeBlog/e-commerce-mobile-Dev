import api from './api';
import ListProduct from '../DTOs/listProduct';

interface ProductIndexResponse {
  products: ListProduct[];
}

const ProductService = {
  index: (url: string) => {
    return api.get<ProductIndexResponse>(url)
      .then(resp => resp.data.products);
  }
}

export default ProductService;