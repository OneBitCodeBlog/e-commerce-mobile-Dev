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

import Login from './pages/Login';

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
    <View style={{ flex: 1, backgroundColor: '#10163a'}}>
      <StatusBar style="light" backgroundColor="#10163a" translucent/>
      <Login/>
    </View>
  );
}
