import React, { Component } from "react";

import "./WithLogo.css";
import { Navbar } from "../_common";
class WithLogo extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default WithLogo;
