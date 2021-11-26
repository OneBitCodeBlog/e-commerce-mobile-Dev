import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import Home from '../pages/Home';
import Games from '../pages/Game';
import Wishlist from '../pages/Wishlist';

const App = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Games') {
            iconName = 'gamepad';
          } else {
            iconName = 'heart';
          }

          return <FontAwesomeIcon 
                    icon={iconName as IconProp}
                    size={size}
                    color={color}
                  />;
        },
        tabBarActiveTintColor: '#304099',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <App.Screen name="Home" component={Home}/>
      <App.Screen name="Games" component={Games}/>
      <App.Screen name="Wishlist" component={Wishlist}/>
    </App.Navigator>
  );
}

export default AppRoutes;