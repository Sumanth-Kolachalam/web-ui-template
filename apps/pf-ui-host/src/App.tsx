import React, { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from 'pf-ui-components';
import 'pf-ui-components/styles.css';

const handleClick = () => {
  console.log('Hi');
};

const App = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
      <Suspense fallback={<div>Loading remote component...</div>}>
        <Button className="" variant="default" size="sm" onClick={handleClick}>
          Click me!
        </Button>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
