import {
  FunctionComponent,
  ReactNode,
  createContext,
  useState,
  useContext,
} from 'react';
import {
  ThemeProvider as TProvider,
  ThemeContext as TContext,
} from 'styled-components';
import { lightTheme, darkTheme } from '.';

type ThemeContextType = {
  switchTheme: (newTheme: string) => void,
};

const ThemeContext = createContext({ switchTheme: () => {} } as ThemeContextType);

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [currentTheme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? darkTheme : lightTheme);

  const switchTheme = (newTheme: string) => {
    const colorScheme = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement;
    colorScheme.content = colorScheme.content === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme || 'dark')
    setTheme(newTheme === 'dark' ? darkTheme : lightTheme);
  };
  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <TProvider theme={currentTheme}>{children}</TProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const currentTheme = useContext(TContext);
  return currentTheme;
};

export { ThemeContext, ThemeProvider, useTheme };
