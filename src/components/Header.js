import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="header" className="">
          <nav className="nav-bar" id="nav-bar">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <span className="logo">
              <a href="/#">
                <img
                  className="nav-logo"
                  src={process.env.PUBLIC_URL + "/images/nav-logo.png"}
                  alt="nav-logo"
                />
              </a>
            </span>
            <ul className="nav-main" id="nav-main">
              <li>
                <a className="nav-item item1" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-item item2" href="#employment">
                  Employment
                </a>
              </li>
              <li>
                <a className="nav-item item3" href="#education">
                  Education
                </a>
              </li>
              <li>
                <a className="nav-item item4" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-item" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="nav-item" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}
