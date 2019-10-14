import React from "react";
import { Login, Register } from "./Screens/Authentication";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" name="login" component={Login} />
          <Route path="/register" name="register" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
