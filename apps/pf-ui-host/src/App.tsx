import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<div>Loading remote component...</div>}>
        <p>Hi</p>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
