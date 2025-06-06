import React, { Suspense, lazy } from "react";

// Import the remote component
const Button = lazy(() => import("UIComponents/Button"));
const DashboardApp = lazy(() => import("Dashboard/App"));

const App = () => (
  <Suspense fallback={<div>Loading remote component...</div>}>
    <Button label={"Click me"} />
    <DashboardApp />
  </Suspense>
);

export default App;



