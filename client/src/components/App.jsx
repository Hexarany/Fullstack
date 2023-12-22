import React from "react";
import Navbar from "./navbar/Navbar";
import "../css/app.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Registration from "./authorisation/Registration";
import Login from "./authorisation/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="wrap">
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
