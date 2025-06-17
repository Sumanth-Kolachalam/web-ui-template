import React, { Suspense, lazy } from 'react';

const hello = 'hello';

const App = () => (
  <Suspense fallback={<div>Loading remote component...</div>}>
    <p>Hi</p>
  </Suspense>
);

export default App;
