import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

import Input from './components/Input';
import Button from './components/Button';

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
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Input icon="envelope"/>
      <Input icon="key"/>
      <Button text="Login" width="80%"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aca',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
