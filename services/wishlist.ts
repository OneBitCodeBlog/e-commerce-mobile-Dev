import api from './api';
import WishItem from '../DTOs/wishItem';

interface WishlistIndexResponse {
  wish_items: WishItem[];
}

const WishlistService = {
  index: (url: string) => {
    return api.get<WishlistIndexResponse>(url)
      .then(resp => resp.data);
  }
}

export default WishlistService;