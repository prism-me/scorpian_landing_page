import React from "react";
import { connect } from "react-redux";
import whitelogo from "./../../assets/Images/logo/Header Logo.png";
import blackLogo from "./../../assets/Images/logo-black.png";
import "./header.scss";
import { DropdownButton, Dropdown } from "react-bootstrap";

import { BsEnvelope, BsPhone } from "react-icons/bs";

class Header extends React.Component {

  render() {
    return (
      <React.Fragment>
        {console.log("setLanguage :: ", this.props.lan)}
        <header className="header">
          <nav
            className={
              "navbar navbar-expand-lg fixed-top custom-nav"
              // (this.props.bgColor &&
              // this.props.bgColor === "white"
              //   ? "custom-nav white-bg"
              //   : "bg-transparent")
            }
          >
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={whitelogo}
                  //width="50"
                  alt="logo"
                  className="img-fluid divinci-logo buhen-logo"
                />
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link page-scroll buhen-header-email" href="mailto:example@mail.com">
                    <BsEnvelope /> {this.props.lan == '/en' ? 'example@mail.com' : this.props.lan == '/ar' ? 'arabic@mail.com' : this.props.lan == '/ch' ? 'chinese@mail.com' : ""}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll buhen-header-email" href="tel:012 234 45678">
                    <BsPhone /> 012 234 45678
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({}))(Header);
