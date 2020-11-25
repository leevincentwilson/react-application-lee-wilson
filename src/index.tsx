import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ErrorHandlingProvider } from './global/errorHandling/errorHandlingProvider';
import { AuthProvider } from './global/auth/authProvider';

ReactDOM.render(
  <React.StrictMode>
    <ErrorHandlingProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ErrorHandlingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
