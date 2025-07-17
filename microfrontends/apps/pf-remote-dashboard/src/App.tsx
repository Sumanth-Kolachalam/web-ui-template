import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import 'pf-ui-components/styles.css';
import { Router } from './lib/router/Router';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<div>Loading remote component...</div>}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
