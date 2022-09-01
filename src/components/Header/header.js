import React from "react";
import { connect } from "react-redux";
import whitelogo from "./../../assets/Images/logo/logo.png";
import "./header.scss";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <nav className={"navbar navbar-expand-lg fixed-top custom-nav"}>
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={whitelogo}
                  alt="logo"
                  className="img-fluid divinci-logo buhen-logo"
                />
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a
                    className="nav-link page-scroll buhen-header-email"
                    href="mailto:info@scorpionproperty.ae"
                  >
                    <HiOutlineMail />{" "}
                    {this.props.lan == "/en"
                      ? "info@scorpionproperty.ae"
                      : this.props.lan == "/ar"
                      ? "info@scorpionproperty.ae"
                      : this.props.lan == "/ch"
                      ? "info@scorpionproperty.ae"
                      : "info@scorpionproperty.ae"}
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link page-scroll buhen-header-email"
                    href="tel:+012 234 45678"
                  >
                    <HiOutlinePhone /> +012 234 45678
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({}))(Header);
