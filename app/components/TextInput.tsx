import React, {forwardRef, useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Text from './Text';

export interface TextInputProps extends RNTextInputProps {
  title?: string;
  error?: string;
  onFocusParam?: () => void;
}

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({error, title, onFocusParam, style, ...props}: TextInputProps, ref) => {
    const [borderColor, setBorderColor] = useState('#C9CDD1');
    return (
      <>
        {title ? (
          <Text variant="medium14" style={[style, styles.title]}>
            {title}
          </Text>
        ) : null}
        <RNTextInput
          ref={ref}
          underlineColorAndroid={'rgba(0,0,0,0)'}
          multiline={false}
          onFocus={() => {
            if (onFocusParam) {
              onFocusParam();
            }
            setBorderColor('#1677FF');
          }}
          onBlur={() => {
            setBorderColor('#C9CDD1');
          }}
          {...props}
          style={[styles.input, {borderColor: borderColor}]}
        />

        {error ? (
          <Text variant="medium14" style={styles.error}>
            {error}
          </Text>
        ) : null}
      </>
    );
  },
);
export default React.memo(TextInput);

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.7,
    width: '100%',
    padding: 11,
    borderRadius: 8,
    color: '#5E6166',
    fontSize: 17,
    fontWeight: '400',
  },
  error: {
    color: '#FF4D4F',
    paddingTop: 6,
  },
  title: {
    color: '#878C91',
    paddingBottom: 6,
  },
});
