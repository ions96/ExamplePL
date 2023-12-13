import React from 'react';
import CloseIcon from '@icons/CloseIcon';
import Box from '@component/Box';
import {TouchableOpacity} from 'react-native';
import Text from '@component/Text';
interface Props {
  title: string;
  onPressClose?: () => void;
}

function HeaderModal({onPressClose, title}: Props) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      borderBottomWidth={0.5}
      borderBottomColor={'secundary'}
      paddingBottom="smn"
      paddingHorizontal="smd">
      <TouchableOpacity onPress={onPressClose}>
        <CloseIcon />
      </TouchableOpacity>
      <Box flex={1} alignItems={'center'}>
        <Text
          variant="medium17"
          color={'secundaryblack'}
          numberOfLines={1}
          marginLeft={'-lg'}>
          {title}
        </Text>
      </Box>
    </Box>
  );
}

export default React.memo(HeaderModal);
