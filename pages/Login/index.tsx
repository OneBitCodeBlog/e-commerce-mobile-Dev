import React, { useState, useRef } from 'react';
import {
  Image,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput
} from 'react-native';

import brandImage from '../../assets/logo-games.png';
import brandOneBitCode from '../../assets/logo-bootcamp.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const passwordRef = useRef<TextInput>(null);

  const handleLogin = async() => {
    alert(email);
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        enabled
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.form}>
            <Image source={brandImage} style={styles.header}/>

            <Input 
              icon="envelope"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              blurOnSubmit={false}
              autoCapitalize="none"
              returnKeyType="next"
              onSubmitEditing={() => passwordRef?.current?.focus()}
            />

            <Input
              icon="lock"
              ref={passwordRef}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={handleLogin}
            />

            <Button
              text="Entrar"
              onPress={handleLogin}
            />
          </View>


          <View style={styles.footer}>
            <Image source={brandOneBitCode}/>
          </View>
        </ScrollView>

      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    marginBottom: 20
  },
  form: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Login;