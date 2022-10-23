import React from 'react';
import ReactDOM from 'react-dom/client';
import AppProviders from './providers';
import { AppRoutes } from './routes';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  </React.StrictMode>
);
