import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faLock,
  faExclamationCircle,
  faHome,
  faGamepad,
  faHeart,
  faSearch,
  faInfoCircle,
  faKey
} from '@fortawesome/free-solid-svg-icons';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AuthProvider from './contexts/auth';

library.add(
  faEnvelope,
  faLock,
  faExclamationCircle,
  faHome,
  faGamepad,
  faHeart,
  faSearch,
  faInfoCircle,
  faKey
);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#10163a" translucent/>
      <AuthProvider>
        <View style={{ flex: 1, backgroundColor: '#10163a' }}>
          <Routes/>
        </View>
      </AuthProvider>
    </NavigationContainer>
  );
}
