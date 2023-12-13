import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Text from '@component/Text';
import RightIcon from '@icons/RightIcon';

interface Props extends TouchableOpacityProps {
  title: string;
  Icon?: React.ElementType;
}

const ListMenuItem = ({title, Icon, style, ...props}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, style]}
      {...props}>
      <View style={styles.textcontainer}>
        {Icon && (
          <View style={styles.iconContainer}>
            <Icon />
          </View>
        )}
        <Text variant="regular15">{title}</Text>
      </View>

      <RightIcon />
    </TouchableOpacity>
  );
};
export default React.memo(ListMenuItem);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 12,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 12,
  },
});
