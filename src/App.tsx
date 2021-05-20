import { FunctionComponent } from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider, ThemeSwitcher, initDarkMode } from 'packages/theme';
import Button from 'packages/theme/components/Button';

initDarkMode();

const App: FunctionComponent = () => (
  <ThemeProvider>
    <GlobalStyle />
    <div data-testid="app">
      <ThemeSwitcher />
      <div>
        <Button text="Styled Component Button" />
      </div>
      <h3>Welcome</h3>
      <input type="checkbox" name="" id="" />
      <button>whut</button>
    </div>
    <div>© Hung Nguyen</div>
  </ThemeProvider>
);

export default App;
