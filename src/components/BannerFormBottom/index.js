import React from "react";
import { connect } from "react-redux";
import headerImage from "./../../assets/mobile 1.png";
import laminar from "./../../assets/Laminar.png";
// import headerBackgroundImage from "./../../assets/fuu-j-r2nJPbEYuSQ-unsplash.jpg";
import PopupForm from "../popup/PopupForm.js";
import headerBackgroundImage from "./../../assets/Images/LandingPage/First-Section-Background.png";
import { content } from "../../data/data";
import "./BannerFormBottom.scss";
import appleStoreImage from "./../../assets/ButtonIcons/apple-store.png";
import androidStoreImage from "./../../assets/ButtonIcons/google-store.png";
import { Form } from "react-bootstrap";
import axios from 'axios';
import Hidden from '@material-ui/core/Hidden';
// import "./subscribe.scss";

import bookConsultImage from "./../../assets/Images/LandingPage/Bottom-Book-Consult-Image.jpg";

class BannerFormBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      show: false,
      name: '',
      phone_number: "",
      email: ""
      

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
     

    // const user = this.state
    // debugger;https://prismcloudhosting.com/BUHEN/Apis/public/api/buhen-form
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



  //toggle modal

  handleShow = () => {

    this.setState({ show: true });

  };

  render() {
    return (
      <React.Fragment>
        <section
          //className="hero-section-wrap pt-100"
          // style={{
          //   backgroundImage: `url(${headerBackgroundImage})`,
          // }}
        >
          <div className="container-fluid btmbanner-form-section">
            <div
              className={`row align-items-center justify-content-between banner-section-row ${this.props.activeLanguage === "arabic"
                ? "banner-arabic-style"
                : "english"
                }`}
            >
              <div className="col-md-6 col-lg-6 col-12 buhen-btmbanner-left"
                // style={{backgroundImage: `url(${bookConsultImage})`,
                // backgroundSize: "cover"}}
                // className="buhen-btmbanner-image"
              >
                <img src={bookConsultImage} className="buhen-btmbanner-image" />
                {/* <div
                  className={`hero-content-left text-white banner-section ${this.props.activeLanguage === "arabic"
                    ? "banner-arabic-heading"
                    : "english"
                    }`}
                >
                  <button class="button btn solid-btn english header_cta_mobile hero_banner_button" id="submit-footer"
                    onClick={this.handleShow}
                  >BOOK YOUR CONSULTATION</button>
                  <Hidden mdUp>
                    <PopupForm

                      show={this.state.show}

                      onHide={this.handleClose}

                    />
                  </Hidden>
                </div> */}
              </div>
              <div className="col-md-6 col-lg-6 d-none d-sm-block">
                <div
                  // className="hero-animation-img banner-image"
                  // id="banner-form"
                >
                  {/* <img
                    src={laminar}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  /> */}
                  <Form
                    // method="post"
                    onSubmit={this.handleSubmit}
                    className="banner-form"
                    // style={{ marginTop: "5rem" }}
                  >
                    <div className="align-items-center buhen-btmBookConsult-form">

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
                </div>
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
}))(BannerFormBottom);
