import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Text from '@component/Text';

interface Props extends TouchableOpacityProps {
  title?: string;
  disabled?: boolean;
}

export default function Button({title, disabled, ...props}: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={disabled ? styles.containerdisabled : styles.container}
      {...props}>
      <Text
        variant={'medium17'}
        style={disabled ? styles.textdisabled : styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1677FF',
    padding: 10,
  },
  containerdisabled: {
    borderRadius: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    padding: 10,
  },
  text: {
    color: '#fff',
  },
  textdisabled: {
    color: '#9FA4AB',
  },
});
