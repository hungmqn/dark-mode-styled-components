import { FunctionComponent } from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider, ThemeSwitcher, initDarkMode } from 'packages/theme';
import MainScreen from 'modules/MainScreen';

initDarkMode();

const App: FunctionComponent = () => (
  <ThemeProvider>
    <GlobalStyle />
    <div data-testid="app">
      <ThemeSwitcher />
      <MainScreen />
    </div>
  </ThemeProvider>
);

export default App;
