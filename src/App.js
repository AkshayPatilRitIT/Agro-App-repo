import React from "react";
import {
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  OTP
} from "./Screens/Authentication";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" name="login" component={Login} />
          <Route path="/register" name="register" component={Register} />
          <Route
            path="/reset"
            name="reset_password"
            component={ResetPassword}
          />
          <Route
            path="/forgot_password"
            name="forgotpassword"
            component={ForgotPassword}
          />
          <Route path="/otp" name="otp" component={OTP} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
