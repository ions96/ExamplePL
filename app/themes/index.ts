import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import merge from 'deepmerge';
import {colors} from './colors';
import {fonts} from './typography';

import {createTheme, useTheme as useThemeRestyle} from '@shopify/restyle';

export {colors, fonts};

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  smn: 10,
  smd: 14,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  '-md': -16,
  '-sm': -8,
  '-xs': -4,
  '-lg': -24,
};

export const borderRadii = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 16,
  full: 999999,
};

export const breakpoints = {
  phone: 0,
  tablet: 768,
};
const defaultTheme = {
  spacing,
  breakpoints,
  textVariants: fonts,
  borderRadii,
};

export const CombinedDefaultTheme = createTheme(
  merge(merge(defaultTheme, NavigationDefaultTheme), {
    colors: {
      primary: colors.mainBlue,
      white: colors.white,
      black: colors.black,
      red: colors.red,
      error: colors.red,
      secundary: colors.secundary,
      secundaryblack: colors.secundaryblack,
      gray: colors.gray,
    },
  }),
);

export type Theme = typeof CombinedDefaultTheme;

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type ThemeSchemes = 'dark' | 'light' | 'system';

export const useTheme = () => {
  return useThemeRestyle<Theme>();
};
