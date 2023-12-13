import React, {useCallback, forwardRef, useState} from 'react';
import {View, Button, StyleSheet, TextInput} from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps,
} from '@gorhom/bottom-sheet';
import Box from '@component/Box';
import HeaderModal from '@component/HeaderModal';
import {useTheme} from '@theme';

interface Props
  extends Omit<BottomSheetProps, 'snapPoints' | 'children' | 'index'> {
  onPressApply?: (item: any) => void;
}

const BottomEditModal = forwardRef<BottomSheet, Props>(
  ({onPressApply, ...props}, ref) => {
    const theme = useTheme();
    const [text, setText] = useState('');

    const handlePress = () => {
      // onSubmit(text);
      setText(''); // Clear the text input after submission
    };

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
            style={styles.input}
            placeholder="Enter text"
            value={text}
            underlineColorAndroid="transparent"
            onChangeText={newText => setText(newText)}
          />
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handlePress} />
          </View>
        </Box>
      </BottomSheet>
    );
  },
);
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

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
});