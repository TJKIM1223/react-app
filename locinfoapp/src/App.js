import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HOME from "./component/App";
import index from "./component/locinfo/index";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HOME} />
        <Route exact path="/index" component={index} />
      </div>
    </BrowserRouter>
  );
}

export default App;
