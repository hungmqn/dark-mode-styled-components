import { DefaultTheme } from 'styled-components';
import { ThemeContext, ThemeProvider, useTheme } from './Context';
import ThemeSwitcher from './ThemeSwitcher';
import { initDarkMode } from './darkmode';
import { colorsLight, colorsDark } from './colors';
import sizes from './sizes';
import spaces from './spaces';

const lightTheme: DefaultTheme = {
  colors: {
    ...colorsLight,
  },
  sizes,
  spaces,
};

const darkTheme: DefaultTheme = {
  colors: {
    ...colorsDark,
  },
  sizes,
  spaces,
};

export {
  ThemeSwitcher,
  ThemeContext,
  ThemeProvider,
  useTheme,
  initDarkMode,
  lightTheme,
  darkTheme,
};
