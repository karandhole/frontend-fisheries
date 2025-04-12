import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'; // ⬅️ import ThemeProvider
import CssBaseline from '@mui/material/CssBaseline';  // ⬅️ import CssBaseline (optional)
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import './i18next';
import { theme } from './theme/theme'; // ⬅️ import your custom theme

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* optional: for consistent base styling */}
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
