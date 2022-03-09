import React from "react";
import { connect } from "react-redux";
import PopupForm from "../popup/PopupForm.js";
import headerBackgroundImage from "./../../assets/Images/LandingPage/Top-Section-Background.png";
import "./HerroSection2.scss";
import { Form } from "react-bootstrap";
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';

import ModalVideo from "react-modal-video";

import language from "./../../data/language";

import {BsFillPlayFill} from "react-icons/bs";

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
     let  phone_number= this.state.phone_number;
     let email= this.state.email;
     

    axios.post(`https://prismcloudhosting.com/BUHEN/Apis/public/api/buhen-form`, { name ,phone_number, email })
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
          className="hero-section-wrap pt-100 background-img video-image-wrapper"
          style={{
            backgroundImage: `url(${headerBackgroundImage})`,
          }}
          id="top-banner-form"
        >
          <a
            href="https://www.youtube.com/watch?v=6R9xTxZxZHA"
            className="popup-youtube video-play-icon d-inline-block"
          >
            <BsFillPlayFill className="rozella-play-btn" />
          </a>
          <div className="container">
            <div
              className={`row align-items-center justify-content-between banner-section-row ${this.props.activeLanguage === "arabic"
                ? "banner-arabic-style"
                : "english"
                }`}
            >
              <div className="col-md-6 col-lg-6 col-12">
                <div
                  className={`hero-content-left text-white banner-section ${this.props.activeLanguage === "arabic"
                    ? "banner-arabic-heading"
                    : "english"
                    }`}
                >
                  <h2 className="text-white banner-heading">
                    {this.props.lan == '/' || this.props.lan == '/en' ? language.english.topSection.header : this.props.lan == '/ar' ? 'arabic@mail.com' : this.props.lan == '/ch' ? language.chinese.topSection.header : ""}
                  </h2>
                  <p className="lead">
                    {this.props.lan == '/' || this.props.lan == '/en' ? language.english.topSection.paragraph : this.props.lan == '/ar' ? 'arabic@mail.com' : this.props.lan == '/ch' ? language.chinese.topSection.paragraph : ""}
                  </p>
                  <a href="#why-invest-in-dubai" class="rozella-btn">
                    <span class="shine"></span>
                    <span>WHY INVEST IN DUBAI</span>
                  </a>
                  {/* <button class="button btn solid-btn english header_cta_mobile hero_banner_button" id="submit-footer"
                    onClick={this.handleShow}
                  >BOOK YOUR CONSULTATION</button>
                  <Hidden mdUp>
                    <PopupForm

                      show={this.state.show}

                      onHide={this.handleClose}

                    />
                  </Hidden> */}
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-none d-sm-block">
                {/* <div
                  className="hero-animation-img banner-image"
                  id="banner-form"
                >
                  <Form
                    onSubmit={this.handleSubmit}
                    className="banner-form"
                  >
                    <div className="align-items-center input-button-wrap">

                      <input
                        type="text"
                        className="form-control input"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handleNameChange}
                      />
                      <input
                        type="text"
                        className="form-control input"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Phone Number"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handlePhoneChange}
                      />
                      <input
                        type="email"
                        className="form-control input"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        required="required"
                        // value={isSubscribe.email}
                        // onChange={handleOnChange}
                        onChange={this.handleEmailChange}
                      />
                      
                      <button className="button btn solid-btn english hero_banner_button mt-2">
                        BOOK YOUR CONSULTATION
                      </button>
                    </div>
                  </Form>
                </div> */}
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
