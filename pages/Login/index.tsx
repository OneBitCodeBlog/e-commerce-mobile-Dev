import React, { useState, useRef } from 'react';
import {
  Image,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert
} from 'react-native';

import brandImage from '../../assets/logo-games.png';
import brandOneBitCode from '../../assets/logo-bootcamp.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import loginSchema from './schema';
import { ValidationError } from 'yup';
import UserService from '../../services/user';

import { useAuth } from '../../contexts/auth';


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const passwordRef = useRef<TextInput>(null);
  const { setLoggedUser } = useAuth();

  const handleLogin = async() => {
    try {
      setEmailError(undefined);
      setPasswordError(undefined);

      await loginSchema.validate(
        { email, password },
        { abortEarly: false}
      );

      const response = await UserService.signIn({ email, password });

      setLoggedUser(response.data);
    } catch (error) {
      if (error instanceof ValidationError) {
        error.inner.forEach(
          error => {
            if (error.path === 'email') {
              setEmailError(error.message);
            } else {
              setPasswordError(error.message);
            }
          }
        );

        return;
      }

      if (error instanceof Error) {
        Alert.alert('Erro', error.message);
        return;
      }

      alert(error);
    }
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
              error={emailError}
              onSubmitEditing={() => passwordRef?.current?.focus()}
            />

            <Input
              icon="lock"
              ref={passwordRef}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              error={passwordError}
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