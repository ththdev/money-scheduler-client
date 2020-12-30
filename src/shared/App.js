import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard, Schedule, Settings } from "screens";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Dashboard} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/settings" component={Settings} />
    </BrowserRouter>
  );
};

export default App;
