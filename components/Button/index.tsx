import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text
} from 'react-native';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type ButtonProps = {
  text?: string;
  backgroundColor?: string;
  width?: string;
  icon?: IconProp;
} & TouchableOpacityProps;

const Button: React.FC<ButtonProps> = 
  ({text, backgroundColor = 'blue', width = '100%', icon, ...rest}) => {
    
  return (
    <TouchableOpacity
      {...rest}
      style={[
        styles.button, backgroundColor === 'blue' ? styles.blue : styles.red,
        {width}
      ]}
    >
      {
        icon &&
          <FontAwesomeIcon icon={icon} style={styles.icon}/>
      }

      {
        text &&
          <Text style={styles.text}>{text}</Text>
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#fff',
    width: '100%',
    minHeight: 45,
    maxHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  blue: {
    backgroundColor: '#2f48c2'
  },
  red: {
    backgroundColor: '#f55'
  },
  icon: {
    color: '#fff'
  }
});

export default Button;