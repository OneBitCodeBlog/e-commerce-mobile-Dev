import React, { forwardRef, useState, useEffect } from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Popable } from 'react-native-popable';

type InputProps = {
  icon?: IconProp;
  error?: string;
} & TextInputProps;

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = 
({icon, error, ...rest}, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [containerStyle, setContainerStyle] = useState<any>(null);
  const [iconStyle, setIconStyle] = useState<any>(null);

  useEffect(() => {
    setIconStyle(isActive ? styles.iconActive :  null);
    setContainerStyle(isActive ? styles.active :  null);

    if (error) {
      setIconStyle(styles.iconError);
      setContainerStyle(styles.error);
    }

    return () => {
      error = undefined;
    }
  }, [isActive, error])

  return (
    <View style={[styles.container, containerStyle]}>
      {
        icon &&
          <>
            <FontAwesomeIcon
              style={[styles.icon, iconStyle]}
              icon={icon}
            />
          </>
      }

      <TextInput
        ref={ref}
        style={styles.input}
        {...rest}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />

      {
        error &&
          <Popable content={error}>
            <FontAwesomeIcon
              style={styles.iconError}
              icon='exclamation-circle'
            />
          </Popable>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    minHeight: 45,
    maxHeight: 45,
    padding: 8,
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff'
  },
  icon: {
    color: '#aaa'
  },
  input: {
    flex: 1,
    width: '100%',
    marginHorizontal: 10
  },
  active: {
    borderColor: '#055bd8'
  },
  error: {
    borderColor: '#f55'
  },
  iconActive: {
    color: '#055bd8'
  },
  iconError: {
    color: '#f55'
  }
});

export default forwardRef(Input);