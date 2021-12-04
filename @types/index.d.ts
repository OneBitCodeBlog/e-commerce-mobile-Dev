import RouteProduct from '../DTOs/routeProduct';
import Game from '../DTOs/game';

declare global {
  declare module '*.png';

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Login: undefined;
      ProductInfo: RouteProduct;
      GameLicenses: Game;
    }
  }
}