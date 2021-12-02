import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductInfo from '../ProductInfo';
import Store from '../Store';

import RouteProduct from '../../DTOs/routeProduct';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Store"
        component={Store}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProductInfo"
        component={ProductInfo}
        options= {
          ({route}) => ({ title: (route?.params as RouteProduct)?.name })
        }
      />
    </Stack.Navigator>
  );
}

export default Home;