import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <App.Screen name="Home" component={Home}/>
    </App.Navigator>
  );
}

export default AppRoutes;