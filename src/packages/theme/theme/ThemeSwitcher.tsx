import { FunctionComponent, useState, useContext } from 'react';
import { ThemeContext } from './Context';

const ThemeSwitcher: FunctionComponent = () => {
  const { switchTheme } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const changeTheme = () => {
    const nextMode = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    switchTheme(nextMode);
  };

  return (
    <button style={{ fontSize: '30px' }} onClick={changeTheme}>
      {darkMode ? '⚇' : '⚉'}
    </button>
  );
};

export default ThemeSwitcher;
