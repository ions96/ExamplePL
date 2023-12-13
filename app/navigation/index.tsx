import React, {useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList, AppNavigationContainerProps} from './types';
import HomeScreen from '@screen/HomeScreen';
import {StatusBar} from 'react-native';
const RootNavigator = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigationContainer(
  props: AppNavigationContainerProps,
) {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef =
    useRef<NavigationContainerRef<RootStackParamList> | null>(null);
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <NavigationContainer
        {...props}
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationRef.current?.getCurrentRoute()?.name || 'unknown';
        }}
        onStateChange={async () => {
          const currentRouteName =
            navigationRef.current?.getCurrentRoute()?.name;
          routeNameRef.current = currentRouteName || 'unknown';
        }}>
        <RootNavigator.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={'Home'}>
          <RootNavigator.Group>
            <RootNavigator.Screen name="Home" component={HomeScreen} />
          </RootNavigator.Group>
        </RootNavigator.Navigator>
      </NavigationContainer>
    </>
  );
}
