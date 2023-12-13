import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Container from '@component/Container';
import {useTranslation} from 'react-i18next';
import Text from '@component/Text';
import {RootStackParamList} from '@navigation/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BottomSheet from '@gorhom/bottom-sheet';
import BottomMenuModal from '@component/BottomMenuModal';
import BottomEditModal from '@component/BottomEditModal';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function HomeScreen({navigation, route}: HomeScreenProps) {
  const {t} = useTranslation();
  const menuModal = useRef<BottomSheet>(null);
  const editModal = useRef<BottomSheet>(null);
  return (
    <Container flex={1} bg="white" paddingHorizontal={'md'}>
      <TouchableOpacity
        onPress={() => {
          menuModal.current?.collapse();
        }}>
        <Text variant="medium14" color={'black'} marginTop={'lg'}>
          {t('t_app_Home')}
        </Text>
      </TouchableOpacity>
      <BottomMenuModal
        ref={menuModal}
        onPressApply={() => {
          editModal.current?.collapse();
        }}
      />
      <BottomEditModal ref={editModal} />
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
