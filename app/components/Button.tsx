import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Text from '@component/Text';

interface Props extends TouchableOpacityProps {
  title?: string;
}

export default function Button({title, ...props}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container} {...props}>
      <Text variant={'medium17'} style={styles.text}>
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
  text: {
    color: '#fff',
  },
});
