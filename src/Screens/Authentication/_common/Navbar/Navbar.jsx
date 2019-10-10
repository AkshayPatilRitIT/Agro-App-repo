import React, { Component } from "react";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    navbarDropdown: false,
    width: 0,
    height: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState(
      { width: window.innerWidth, height: window.innerHeight },
      () => {
        if (this.state.width > 768) {
          this.setState({ navbarDropdown: false }, () => {
            var body = document.querySelector("body");
            body.style.overflow = "auto";
          });
        }
      }
    );
  };

  render() {
    console.log("height", this.state.height, "width", this.state.width);
    return (
      <div className="Authentication__navbar__wrapper">
        <div className="Authentication__navbar__container">
          <div className="Authentication__navbar__brandname">AgroApp</div>
          <div className="Authentication__navbar__rightside">
            <ul className="Authentication__navbar__list">
              <li className="Authentication__navbar__link">Login</li>
              <li className="Authentication__navbar__link">Contact us</li>
              <li className="Authentication__navbar__link">About us</li>
              <button className="Authentication__navbar__btn__post__add">
                Post Add
              </button>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
