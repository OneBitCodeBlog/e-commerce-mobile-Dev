import Category from './category';
import SystemRequirement from './systemRequirement';

export default interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  mode: string;
  developer: string;
  release_date: string;
  status: string;
  categories: Category[];
  system_requirement: SystemRequirement;
  sells_count: number;
  favorited_count: number;
};