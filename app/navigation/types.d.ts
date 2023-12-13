import {NavigationContainerProps as NavigationContainerProps} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
};

export type AppNavigationContainerProps = Omit<
  NavigationContainerProps & {
    theme?: Theme | undefined;
    fallback?: React.ReactNode;
    documentTitle?: DocumentTitleOptions | undefined;
    onReady?: (() => void) | undefined;
  } & {
    ref?: React.Ref<NavigationContainerRef<RootParamList>> | undefined;
  },
  'children'
>;
