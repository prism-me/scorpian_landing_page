import React from "react";
import "./footer.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Col, Container, Row } from "react-bootstrap";

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
      <footer className="footerWrape">
        <div className="footerTopWrape">
          <Container>
            <Row>
              <Col sm={6}>
                <h3 className="title">Head Office</h3>
                <p className="subtitle mb-2">
                  G-03 Al Fattan Marine Towers, JBR Walk, Dubai Marina, Dubai,
                  UAE - 747
                </p>
                <p className="footerEmail">
                  <a href="mailto:info@scorpionproperty.ae">
                    <HiOutlineMail /> info@scorpionproperty.ae
                  </a>
                </p>
              </Col>
              <Col sm={6}>
                <h3 className="title">Privacy Policy</h3>
                <p className="subtitle">
                  We have implemented measures designed to secure your personal
                  information from accidental loss and from unauthorized access,
                  use, alteration and disclosure. All information you provide to
                  us is stored on our secure servers behind firewalls. Any
                  payment transactions will be encrypted using SSL technology.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <hr style={{ border: "0.5px solid white", width: "90%" }} />
        <div className="footerbottomWrape">
          <Container>
            <p className={`copyright-text-para pb-0 mb-0`}>
              {this.props.lan == "/" || this.props.lan == "/en" ? (
                <span>
                  Designed and managed by{" "}
                  <a href="https://www.prism-me.com/" target="_blank">
                    Prism Digital
                  </a>
                </span>
              ) : this.props.lan == "/gu" ? (
                <span>
                  由{" "}
                  <a href="https://www.prism-me.com/" target="_blank">
                    Prism Digital
                  </a>{" "}
                  设计和管理{" "}
                </span>
              ) : (
                <span>
                  Designed and managed by{" "}
                  <a href="https://www.prism-me.com/" target="_blank">
                    Prism Digital
                  </a>
                </span>
              )}
              <span className="iconsWrape">
                <a
                  href="https://www.facebook.com/Scorpion.Property2020/"
                  className="rozella-social-icon"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.linkedin.com/company/scorpion-property-real-estate-brokers/"
                  className="rozella-social-icon"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://twitter.com/dubai_scorpion"
                  className="rozella-social-icon"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.instagram.com/scorpionproperty/"
                  className="rozella-social-icon"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCvjJLhBcYzuTZtdqS0sWoKQ"
                  className="rozella-social-icon"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
              </span>
            </p>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;
