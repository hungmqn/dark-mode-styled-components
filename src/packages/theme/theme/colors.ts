const colorsLight = {
  color: 'rgba(0, 0, 0, 0.85)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  backgroundColorInverse: 'rgba(20, 20, 20, 1)',
  brand: {
    main: '#fa8c16', // orange-6,
    background: '#ffffff',
    selectedBackground: '#fff7e6', // orange-1
    selectedText: 'rgba(0, 0, 0, 0.85)', // primary text
    hover: '#ffa940', // orange-5
    normal: '#fa8c16', // orange-6
    click: '#d46b08', // orange-7
  },
  primary: {
    main: '#1890ff', // blue-6,
    background: '#1890ff', // blue-6,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#096dd9', // blue-7
    hoverBackground: '#40a9ff', // blue-5
    hoverText: 'rgba(255, 255, 255, 0.85)', // white text
  },
  success: {
    main: '#52c41a', // green-6,
    background: '#52c41a', // green-6,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#389e0d', // green-7
    hoverBackground: '#73d13d', // green-5
    hoverText: 'rgba(255, 255, 255, 0.85)', // white text
  },
  warning: {
    main: '#faad14', // gold-6,
    background: '#faad14', // gold-6,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#d48806', // gold-7
    hoverBackground: '#ffc53d', // gold-5
    hoverText: 'rgba(255, 255, 255, 0.85)', // white text
  },
  error: {
    main: '#ff4d4f', // red-5,
    background: '#ff4d4f', // red-5,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#f5222d', // red-6
    hoverBackground: '#ff7875', // red-4
    hoverText: 'rgba(255, 255, 255, 0.85)', // white text
  },
  generic: {
    white: '#ffffff',
    black: '#000000',
    background: '#ffffff',
  },
  typography: {
    title: 'rgba(0, 0, 0, 0.85)',
    primaryText: 'rgba(0, 0, 0, 0.85)',
    secondaryText: 'rgba(0, 0, 0, 0.45)',
    disable: 'rgba(0, 0, 0, 0.25)',
    border: 'rgba(0, 0, 0, 0.15)',
    dividers: 'rgba(0, 0, 0, 0.06)',
    background: 'rgba(0, 0, 0, 0.04)',
    tableHeader: 'rgba(0, 0, 0, 0.02)',
  },
};

const colorsDark = {
  color: 'rgba(255, 255, 255, 0.85)',
  backgroundColor: 'rgba(20, 20, 20, 1)',
  backgroundColorInverse: 'rgba(255, 255, 255, 1)',
  brand: {
    main: '#fa8c16', // orange-6,
    background: '#141414',
    selectedBackground: '#2b1d11', // orange-1
    selectedText: 'rgba(255, 255, 255, 0.85)', // primary text
    hover: '#aa6215', // orange-5
    normal: '#d87a16', // orange-6
    click: '#e89a3c', // orange-7
  },
  primary: {
    main: '#177ddc', // blue-6,
    background: '#177ddc', // blue-6,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#3c9ae8', // blue-7
    hoverBackground: '#1765ad', // blue-5
    hoverText: 'rgba(255, 255, 255, 0.85)', // primary text
  },
  success: {
    main: '#49aa19', // green-6,
    background: '#49aa19', // green-6,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#6abe39', // green-7
    hoverBackground: '#3c8618', // green-5
    hoverText: 'rgba(255, 255, 255, 0.85)', // primary text
  },
  warning: {
    main: '#d89614', // gold-6,
    background: '#d89614', // gold-6,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#e8b339', // gold-7
    hoverBackground: '#aa7714', // gold-5
    hoverText: 'rgba(255, 255, 255, 0.85)', // primary text
  },
  error: {
    main: '#a61d24', // red-5,
    background: '#a61d24', // red-5,
    text: 'rgba(255, 255, 255, 0.85)', // white
    clickBackground: '#d32029', // red-6
    hoverBackground: '#791a1f', // red-4
    hoverText: 'rgba(255, 255, 255, 0.85)', // primary text
  },
  generic: {
    white: '#ffffff',
    black: '#000000',
    background: '#141414',
  },
  typography: {
    title: 'rgba(255, 255, 255, 0.85)',
    primaryText: 'rgba(255, 255, 255, 0.85)',
    secondaryText: 'rgba(255, 255, 255, 0.45)',
    disable: 'rgba(255, 255, 255, 0.30)',
    border: 'rgba(255, 255, 255, 0.20)',
    dividers: 'rgba(255, 255, 255, 0.12)',
    background: 'rgba(255, 255, 255, 0.08)',
    tableHeader: 'rgba(255, 255, 255, 0.04)',
  },
};

export { colorsLight, colorsDark };
