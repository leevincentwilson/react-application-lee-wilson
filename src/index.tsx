import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import App from './App';
import { ErrorHandlingProvider } from './global/errorHandling/errorHandlingProvider';
import { AuthProvider } from './global/auth/authProvider';
import { theme } from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorHandlingProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ErrorHandlingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
