import React, { Component } from "react";

import "./Login.css";
class Login extends Component {
  render() {
    return (
      <div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
    );
  }
}
export default Login;
