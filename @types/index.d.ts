import RouteProduct from '../DTOs/routeProduct';

declare global {
  declare module '*.png';

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Login: undefined;
      ProductInfo: RouteProduct;
      GameLicenses: RouteProduct;
    }
  }
}