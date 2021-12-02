import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RouteProduct from '../../DTOs/routeProduct';

import GameLicenses from '../GameLicenses';
import GamesList from '../GamesList';

const Stack = createNativeStackNavigator();

const Games: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GamesList"
        component={GamesList}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="GameLicenses"
        component={GameLicenses}
        options={
          ({route}) => ({ title: (route?.params as RouteProduct)?.name })
        }
      />
    </Stack.Navigator>
  );
}

export default Games;