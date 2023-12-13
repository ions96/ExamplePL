import React, {useCallback, forwardRef, useState, useRef} from 'react';
import {View, StyleSheet, TextInput as TextInputRn} from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import Box from '@component/Box';
import HeaderModal from '@component/HeaderModal';
import TextInput from '@component/TextInput';
import Button from '@component/Button';
import {useTheme} from '@theme';

interface Props
  extends Omit<BottomSheetProps, 'snapPoints' | 'children' | 'index'> {}

const BottomEditModal = forwardRef<BottomSheet, Props>(({...props}, ref) => {
  const theme = useTheme();
  const [errorEmail, setErrorEmail] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const emailInputRef = useRef<TextInputRn>(null);

  const onPressClose = useCallback(() => {
    // @ts-ignore
    ref.current?.close();
  }, [ref]);

  const renderBackdrop = useCallback(
    (props_: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props_}
        pressBehavior="close"
        opacity={0.4}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailName = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const handleSubmit = () => {
    emailInputRef.current?.blur();
    if (isEmailValid(email)) {
      setErrorEmail('');
    } else {
      setErrorEmail('This email address is invalid');
    }
  };
  return (
    <BottomSheet
      index={-1}
      ref={ref}
      snapPoints={['98%']}
      enableOverDrag={false}
      {...props}
      handleStyle={styles.handle}
      handleIndicatorStyle={{backgroundColor: theme.colors.white}}
      backdropComponent={renderBackdrop}>
      <Box backgroundColor="white">
        <HeaderModal title={'Name & Email'} onPressClose={onPressClose} />
      </Box>
      <Box flex={1} padding="md" paddingTop={'lg'}>
        <TextInput
          placeholder="Enter name"
          value={name}
          title={'Name'}
          keyboardType={'email-address'}
          autoCapitalize="words"
          returnKeyType="next"
          onSubmitEditing={handleEmailName}
          onChangeText={text => setName(text)}
        />
        <TextInput
          ref={emailInputRef}
          placeholder="Enter email"
          value={email}
          title={'Email'}
          keyboardType={'email-address'}
          error={errorEmail}
          returnKeyType="send"
          autoCapitalize="characters"
          style={styles.secondInput}
          onFocusParam={() => {
            setErrorEmail('');
          }}
          onSubmitEditing={handleSubmit}
          onChangeText={text => setEmail(text)}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Save"
            onPress={handleSubmit}
            disabled={!name || !email}
          />
        </View>
      </Box>
    </BottomSheet>
  );
});
export default BottomEditModal;

const styles = StyleSheet.create({
  handle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 0,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    backgroundColor: 'red',
    flex: 1,
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  secondInput: {
    marginTop: 24,
  },
});
