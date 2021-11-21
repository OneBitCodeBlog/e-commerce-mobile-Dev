import React, { forwardRef, useState, useEffect } from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  View
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type InputProps = {
  icon?: IconProp;
} & TextInputProps;

const Input: React.ForwardRefRenderFunction<TextInput, InputProps> = 
({icon, ...rest}, ref) => {
  const [isActive, setIsActive] = useState(false);
  const [containerStyle, setContainerStyle] = useState<any>(null);
  const [iconStyle, setIconStyle] = useState<any>(null);

  useEffect(() => {
    setIconStyle(isActive ? styles.iconActive :  null);
    setContainerStyle(isActive ? styles.active :  null);
  }, [isActive])

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
  iconActive: {
    color: '#055bd8'
  }
});

export default forwardRef(Input);