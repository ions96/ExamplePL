import React, {useCallback, forwardRef} from 'react';
import {StyleSheet} from 'react-native';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import HeaderModal from '@component/HeaderModal';
import Box from '@component/Box';
import Text from '@component/Text';
import ProgressFastImage from '@component/ProgressFastImage';
import ProfileIcon from '@icons/ProfileIcon';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import SectionTitle from '@component/SectionTitle';
import ListItem from '@component/ListMenuItem';

interface Props
  extends Omit<BottomSheetProps, 'snapPoints' | 'children' | 'index'> {
  onPressApply?: (item: any) => void;
}

const BottomMenuModal = forwardRef<BottomSheet, Props>(
  ({onPressApply, ...props}, ref) => {
    const theme = useTheme();
    const {t} = useTranslation();
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
        <Box flex={1} backgroundColor="white">
          <HeaderModal title={'Profile'} onPressClose={onPressClose} />
          <Box
            paddingHorizontal={'md'}
            paddingTop={'lg'}
            flexDirection={'row'}
            alignItems={'center'}>
            <ProgressFastImage
              source={require('@images/photoprofil.png')}
              imageStyle={styles.radiusImage}
              resizeMode="cover"
              style={styles.image}
            />
            <Box marginLeft={'smn'}>
              <Text variant="medium22" color={'secundaryblack'}>
                {t('t_app_teryname')}
              </Text>
              <Text variant="regular17" color={'gray'}>
                {t('t_app_teryemail')}
              </Text>
            </Box>
          </Box>
          <BottomSheetScrollView style={styles.scrollContainer}>
            <SectionTitle title={t('t_app_menu_section_profile')} />
            <ListItem
              title={t('t_app_casahub_mortage')}
              Icon={ProfileIcon}
              onPress={onPressApply}
            />
            <ListItem
              title={t('t_app_casahub_mortage')}
              Icon={ProfileIcon}
              onPress={onPressApply}
            />
            <SectionTitle title={t('t_app_menu_section_preferences')} />
            <ListItem
              title={t('t_app_casahub_mortage')}
              Icon={ProfileIcon}
              onPress={onPressApply}
            />
            <SectionTitle title={t('t_app_menu_section_more')} />
            <ListItem
              title={t('t_app_casahub_mortage')}
              Icon={ProfileIcon}
              onPress={onPressApply}
            />
          </BottomSheetScrollView>
        </Box>
      </BottomSheet>
    );
  },
);
export default BottomMenuModal;

const styles = StyleSheet.create({
  handle: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 0,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 16,
  },
  radiusImage: {
    borderRadius: 12,
  },
  image: {
    height: 64,
    width: 64,
  },
});
