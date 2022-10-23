import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ErrorBoundary fallback={<span>An error occured</span>}>
      <Router>{children}</Router>
    </ErrorBoundary>
  );
};

export default AppProviders;
