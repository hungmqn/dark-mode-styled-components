const initDarkMode = () => {
  const ColorScheme = document.createElement('meta');
  ColorScheme.name = 'color-scheme';
  ColorScheme.content = localStorage.getItem('theme') || 'light';
  document.getElementsByTagName('head')[0].appendChild(ColorScheme);
};

export { initDarkMode };
