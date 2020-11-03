import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HOME from "./component/App";
import locinfo from "./component/locinfo/locinfo";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HOME} />
        <Route exact path="/locinfo" component={locinfo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
