import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CGU_Login from './cgu_login'; // ← 引入 CGU_Login 組件

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CGU_Login />
    </ThemeProvider>
  );
}

export default App;
