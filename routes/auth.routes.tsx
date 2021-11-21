import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#10163a' }
      }}
    >
      <Auth.Screen name="Login" component={Login}/>
    </Auth.Navigator>
  );
}

export default AuthRoutes;