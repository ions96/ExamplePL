import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '@component/Text';

interface Props {
  title: string;
}
export default function SectionTitle({title}: Props) {
  return (
    <View style={styles.container}>
      <Text variant="reuglarlarge10">{title.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingTop: 24, paddingBottom: 8},
});
