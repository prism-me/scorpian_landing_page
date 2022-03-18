import React from "react";
import { connect } from "react-redux";
import PopupForm from "../popup/PopupForm.js";
import headerBackgroundImage from "./../../assets/Images/LandingPage/Top-Section-Background.png";
import "./HerroSection2.scss";
import { Form } from "react-bootstrap";
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';

import ModalVideo from "react-modal-video";

import { language } from "./../../data/language.js";



class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show: false,
      name: '',
      phone_number: "",
      email: "",
      openVideo: false

    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  }

  handlePhoneChange = event => {
    this.setState({ phone_number: event.target.value });
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();


    let name = this.state.name;
    let phone_number = this.state.phone_number;
    let email = this.state.email;


    axios.post(`https://prismcloudhosting.com/BUHEN/Apis/public/api/buhen-form`, { name, phone_number, email })
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          //alert(res.data.message);

          window.location =
            "thankyou.html";
        }
        console.log(res);
        console.log(res.data);
      })
  }


  handleClose = () => {

    this.setState({ show: false });

  };


  handleShow = () => {

    this.setState({ show: true });

  };

  render() {
    return (
      <React.Fragment>
        <section
          className="hero-section-wrap pt-100 background-imgBanner"
          // style={{
          //   backgroundImage: `url(${headerBackgroundImage})`,
          // }}
          id="top-banner-form"
        >
          {/* <a
            href="https://www.youtube.com/watch?v=6R9xTxZxZHA"
            className="popup-youtube video-play-icon d-inline-block"
          >
            <BsFillPlayFill className="rozella-play-btn" />
          </a> */}
          <div className="container">
            <div
              className={`row align-items-center justify-content-between banner-section-row ${this.props.activeLanguage === "arabic"
                ? "banner-arabic-style"
                : "english"
                }`}
            >
              <div className="col-md-6 col-lg-7 col-12">
                <div
                  className={`hero-content-left text-white banner-section ${this.props.activeLanguage === "arabic"
                    ? "banner-arabic-heading"
                    : "english"
                    }`}
                >
                  <h2 className="text-white banner-heading">
                    {this.props.lan == '/' || this.props.lan == '/en' ? language.english.topSection.header : this.props.lan == '/ar' ? language.arabic.topSection.header : this.props.lan == '/ch' ? language.chinese.topSection.header : language.english.topSection.header}
                  </h2>
                  <p className="lead">
                    {this.props.lan == '/' || this.props.lan == '/en' ? language.english.topSection.paragraph : this.props.lan == '/ar' ? language.english.topSection.paragraph : this.props.lan == '/ch' ? language.chinese.topSection.paragraph : language.english.topSection.paragraph}
                  </p>
                  <a href="#why-invest-in-dubai" class="rozella-btn">
                    <span class="shine"></span>
                    <span>WHY INVEST IN DUBAI</span>
                  </a>
                  <button class="button btn solid-btn english header_cta_mobile hero_banner_button" id="submit-footer"
                    onClick={this.handleShow}
                  >Submit</button>
                  <Hidden mdUp>
                    <PopupForm

                      show={this.state.show}

                      onHide={this.handleClose}

                    />
                  </Hidden>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 d-none d-sm-block">
                {/* <div
                  className="hero-animation-img banner-image"
                  id="banner-form"
                > */}
                <Form
                  onSubmit={this.handleSubmit}
                  className="banner-form"
                >
                  {/* <div className="align-items-center input-button-wrap"> */}

                  <h2 className="formheading">Contact Us</h2>
                  <div className="row">
                    <div className="col-md-6 d-flex align-items-center ">
                      <label for="name">First Name <span className="text-danger"><sup>*</sup></span></label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input"
                        id="name"
                        name="name"
                        // placeholder="Full Name"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handleNameChange}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                      <label for="lname">Last Name <span className="text-danger"><sup>*</sup></span></label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input"
                        id="lname"
                        name="lname"
                        // placeholder="Full Name"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handleNameChange}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                      <label for="email">Email <span className="text-danger"><sup>*</sup></span></label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control input"
                        id="email"
                        name="email"
                        // placeholder="Email Address"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handleEmailChange}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                      <label for="phone_number">Phone <span className="text-danger"><sup>*</sup></span></label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input"
                        id="phone_number"
                        name="phone_number"
                        // placeholder="Phone Number"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handlePhoneChange}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                      <label for="budget">Budget <span className="text-danger"><sup>*</sup></span></label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input"
                        id="budget"
                        name="budget"
                        // placeholder="Phone Number"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handlePhoneChange}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center ">
                      <label for="lookig_for">What are you looking for? <span className="text-danger"><sup>*</sup></span></label>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control input"
                        id="lookig_for"
                        name="lookig_for"
                        // placeholder="Phone Number"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handlePhoneChange}
                      />
                    </div>
                  </div>
                  <center>
                    <button className="button btn solid-btn english hero_banner_button mt-4">
                      Submit
                    </button>
                  </center>

                  {/* </div> */}
                </Form>
                {/* <iframe frameborder="0" style={{ height: "500px", width: "99%", border: "none" }} src='https://forms.zohopublic.com/faizaprism/form/ContactUs1/formperma/PX_fvY9aiv-U4p41GOmPU0NpBsuRXuJdG9gNqy8nNK0'></iframe> */}
                {/* </div> */}
              </div>
            </div>

          </div>
          <ModalVideo
            channel="youtube"
            autoplay={1}
            isOpen={this.openVideo}
            videoId="6R9xTxZxZHA"
            onClose={false}
          />
        </section>




      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(HeroSection);
