import React from 'react';
import { ThemeProvider } from 'styled-components';
import Calculator from './containers/Calculator';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Calculadora</h1>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
