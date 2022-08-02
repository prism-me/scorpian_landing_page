import React from "react";
import { connect } from "react-redux";
import whitelogo from "./../../assets/Images/logo/Header Logo.png";
import "./header.scss";
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
            }
          >
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
                  <a className="nav-link page-scroll buhen-header-email" href="mailto:info@rozellarealestate.com">
                    <BsEnvelope /> {this.props.lan == '/en' ? 'info@rozellarealestate.com' : this.props.lan == '/ar' ? 'info@rozellarealestate.com' : this.props.lan == '/ch' ? 'info@rozellarealestate.com' : 'info@rozellarealestate.com'}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page-scroll buhen-header-email" href="tel:+971 45689 536">
                    <BsPhone /> +971 45689 536
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
