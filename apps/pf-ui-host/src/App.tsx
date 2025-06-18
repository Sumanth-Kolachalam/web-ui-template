import React, { Suspense, lazy } from 'react';

const App = () => {
  return (
    <Suspense fallback={<div>Loading remote component...</div>}>
      <p>Hi</p>
    </Suspense>
  );
};

export default App;
