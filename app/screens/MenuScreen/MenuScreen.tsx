import React, {useState, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import Container from '@component/Container';
import {useTranslation} from 'react-i18next';
import Text from '@component/Text';
import {RootStackParamList} from '@navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Box from '@component/Box';
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;
export default function HomeScreen({navigation, route}: HomeScreenProps) {
  const {t} = useTranslation();
  const inserts = useSafeAreaInsets();

  return (
    <Container flex={1} bg="background" paddingHorizontal={'md'}>
      <Box height={inserts.top} />
      <Text variant="medium14" color={'black'} marginTop={'lg'}>
        {t('t_app_menu_screen')}
      </Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  primaryButton: {marginTop: 20},
  secundaryButton: {
    marginTop: 20,
  },
  appletop: {
    marginTop: 20,
  },
});
