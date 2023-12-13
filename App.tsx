import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import AppNavigationContainer from './app/navigation';
import {I18nextProvider} from 'react-i18next';
import i18next from './app/utils/i18n';
import {CombinedDefaultTheme} from './app/themes';
import {ThemeProvider} from '@shopify/restyle';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
const App = () => {
  return (
    <GestureHandlerRootView style={styles.root}>
      <BottomSheetModalProvider>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider theme={CombinedDefaultTheme}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <AppNavigationContainer />
            </SafeAreaProvider>
          </ThemeProvider>
        </I18nextProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
});

export default App;
