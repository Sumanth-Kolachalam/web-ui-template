import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from 'pf-ui-components';
import 'pf-ui-components/styles.css';
import { router } from './lib/router/router';

const handleClick = () => {
  console.log('Hi');
};

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<div>Loading remote component...</div>}>
        <RouterProvider router={router}/>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
