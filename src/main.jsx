import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Profile } from './pages/Profile'
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Blog />
    </ThemeProvider>
  </React.StrictMode>,
)
