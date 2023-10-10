import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import './app/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@/app/theme/ThemeProvider.tsx';
import ErrorBoundary from '@/app/errorBoundary/ErrorBoundary.tsx';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
