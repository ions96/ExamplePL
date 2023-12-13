import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '@component/Container';
import Button from '@component/Button';
import {useTranslation} from 'react-i18next';
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
      <View style={styles.primaryButton}>
        <Button
          title="Profil"
          onPress={() => {
            menuModal.current?.collapse();
          }}
        />
      </View>
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
  primaryButton: {marginTop: 50, height: 40},
});
