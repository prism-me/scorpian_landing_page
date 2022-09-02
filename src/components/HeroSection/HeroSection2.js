import React from "react";
import { connect } from "react-redux";
import PopupForm from "../popup/PopupForm.js";
import "./HerroSection2.scss";
import { language } from "./../../data/language.js";
import ZohoBannerForm from "../ZohoBannerForm/ZohoBannerForm.js";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  scrollToBottom6 = () => {
    const bottomEle = document.getElementById("why-invest-in-dubai");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <React.Fragment>
        <section
          className="hero-section-wrap pt-100 background-imgBanner"
          id="top-banner-form"
        >
          <div className="container">
            <div
              className={`row align-items-center justify-content-between banner-section-row`}
            >
              <div className="col-md-6 col-lg-7 col-12">
                <div className={`hero-content-left text-white banner-section`}>
                  <h2 className="text-white banner-heading">
                    {this.props.lan == "/" || this.props.lan == "/en"
                      ? language.en.topSection.header
                      : this.props.lan == "/gu"
                      ? language.gu.topSection.header
                      : language.en.topSection.header}
                  </h2>
                  <p className="lead">
                    {this.props.lan == "/" || this.props.lan == "/en"
                      ? language.en.topSection.paragraph
                      : this.props.lan == "/gu"
                      ? language.gu.topSection.paragraph
                      : language.en.topSection.paragraph}
                  </p>
                  <p style={{ fontSize: "18px" }}>
                    <strong style={{ fontWeight: "700" }}>
                      {this.props.lan == "/" || this.props.lan == "/en"
                        ? language.en.topSection.paragraph1
                        : this.props.lan == "/gu"
                        ? language.gu.topSection.paragraph1
                        : language.en.topSection.paragraph1}
                    </strong>
                  </p>
                  {/* <button
                    className="rozella-btn"
                    onClick={this.scrollToBottom6}
                  >
                    {this.props.lan == "/" || this.props.lan == "/en"
                      ? "CTA Example"
                      : this.props.lan == "gu"
                      ? "为什么投资迪拜？"
                      : "CTA Example"}
                  </button> */}
                  <button
                    className="button btn solid-btn english header_cta_mobile hero_banner_button"
                    onClick={this.handleShow}
                  >
                    Submit
                  </button>
                  <PopupForm show={this.state.show} onHide={this.handleClose} />
                </div>
              </div>
              <div className="col-md-6 col-lg-5 zohoFormDisplayOnDesktop">
                <ZohoBannerForm />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(HeroSection);
