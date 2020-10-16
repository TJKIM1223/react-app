import React from "react";
import Home from "./component/home/Home";
import editLocal from "./component/views/edit/editLocal/index";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/editLocal" component={editLocal} />
      </div>
    </BrowserRouter>
  );
}

export default App;
