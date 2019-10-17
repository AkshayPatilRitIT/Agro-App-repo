import React, { Component } from "react";

import "./WithLogo.css";
import { Navbar, Footer } from "../_common";
class WithLogo extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="WithLogo__children">{this.props.children}</div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default WithLogo;
