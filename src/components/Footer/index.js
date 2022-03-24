import React from "react";
import BottomTabNavigator from "../BottomTabNavigator/BottomTabNavigator";
import "./footer.scss";
import { content } from "./../../data/data";
import { FaHeart } from "react-icons/fa";

import footerLogo from "./../../assets/Images/logo/Footer Logo.png";

import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <footer className="footer-section">
          <div className="rozella-subscribe-wrap">
            {/* <label id="rozella-footer-subscribe">
              <input type="text" name="" placeholder="example@mail.com" /> */}
            {/* <button>SUBSCRIBE</button> */}
            <a href="#bannerForm" class="rozella-btn rozella-btn2 mb-n3 py-3">
              <span class="shine"></span>
              <span>ENQUIRE NOW</span>
            </a>
            {/* </label> */}
          </div>
          <div className="footer-bottom gray-light-bg pt-5 pb-2 buhin-footer">
            <div className="container-fluid footer-wrap">
              <div
                className={`row  ${this.props.activeLanguage === "arabic"
                  ? "footer-row-reverse"
                  : "english"
                  }`}
              >
                <div className="col-md-12 copyrights-text-wrap">
                  <p
                    className={`copyright-text-para pb-0 mb-0 ${this.props.activeLanguage === "arabic"
                      ? "copyright-arabic-text"
                      : "english"
                      }`}
                  >
                    {this.props.activeLanguage ===
                      "arabic" ? (
                      <span>Designed and managed by <a href="https://www.prism-me.com/">Prism Digital</a></span>
                    ) : (
                      <span>Designed and managed by <a href="https://www.prism-me.com/">Prism Digital</a></span>
                    )}
                    <span>
                      <a href="" className="rozella-social-icon">
                        <span class="shine"></span>
                        <FaFacebookF />
                      </a>
                      <a href="" className="rozella-social-icon">
                        <span class="shine"></span>
                        <FaLinkedinIn />
                      </a>
                      <a href="" className="rozella-social-icon">
                        <span class="shine"></span>
                        <FaTwitter />
                      </a>
                      <a href="" className="rozella-social-icon">
                        <span class="shine"></span>
                        <FaInstagram />
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <BottomTabNavigator /> */}
      </React.Fragment>
    );
  }
}

export default Footer;
