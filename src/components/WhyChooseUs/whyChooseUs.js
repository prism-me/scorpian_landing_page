import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import carImage from "./../../assets/About/about-img.jpg";
import person2 from "./../../assets/DSC04426.JPG";
import person1 from "./../../assets/Fabrizio.jpeg";
import sliderEnglish1 from "./../../assets/sliderImages/airlife-sa-stand-alone-device1.png";
import { content } from "../../data/data";
import "./whyChooseUs.scss";

import Image2 from "./../../assets/Images/LandingPage/Rozella-Image2.png";
import RozellaDesign from "./../../assets/Images/LandingPage/Rozella-Design.png";
import RozellaLine1 from "./../../assets/Images/LandingPage/Rozella-Line-Long.png";
import RozellaLine2 from "./../../assets/Images/LandingPage/Rozella-Line-Short.png";

import { language } from "../../data/language.js";

const WhyChooseUs = (props) => {

  const scrollToBottom6 = () => {
    const bottomEle = document.getElementById("crmWebToEntityForm");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="about-buraq-wrap">
      <Container fluid>
        <Row
          className={`about-buraq-row ${props.activeLanguage === "arabic"
            ? "about-arabic-style"
            : "english"
            }
          rozella-row2`}
          id="why-choose-us"
        >
          <Col lg={6} xs={12} sm={12} className="rozella-content">
            <div class="rozella-heading">
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.header : props.lan == '/ar' ? language.arabic.whyChooseUs.header : props.lan == '/ch' ? language.chinese.whyChooseUs.header : language.english.whyChooseUs.header}
            </div>
            <div class="rozella-subheading">
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.title : props.lan == '/ar' ? language.arabic.whyChooseUs.title : props.lan == '/ch' ? language.chinese.whyChooseUs.title : language.english.whyChooseUs.title}
            </div>
            <p>
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.subtitle : props.lan == '/ar' ? language.arabic.whyChooseUs.subtitle : props.lan == '/ch' ? language.chinese.whyChooseUs.subtitle : language.english.whyChooseUs.subtitle}
            </p>
            <h4 class={"rozella-heading2"}>
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.aboutus : props.lan == '/ar' ? language.arabic.whyChooseUs.aboutus : props.lan == '/ch' ? language.chinese.whyChooseUs.aboutus : language.english.whyChooseUs.aboutus}
            </h4>
            {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.aboutusp.map((x) => { return <p className={"mb-0"}>{x}</p> }) : props.lan == '/ar' ? language.arabic.whyChooseUs.aboutusp.map((x) => { return <p className={"mb-0"}>{x}</p> }) : props.lan == '/ch' ? language.chinese.whyChooseUs.aboutusp.map((x) => { return <p className={"mb-0"}>{x}</p> }) : language.english.whyChooseUs.aboutusp.map((x) => { return <p className={"mb-0"}>{x}</p> })}
            <h4 class={"rozella-heading2 mt-3"}>
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.visionmission : props.lan == '/ar' ? language.arabic.whyChooseUs.visionmission : props.lan == '/ch' ? language.chinese.whyChooseUs.visionmission : language.english.whyChooseUs.visionmission}
            </h4>
            <p>
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.visionmissionp : props.lan == '/ar' ? language.arabic.whyChooseUs.visionmissionp : props.lan == '/ch' ? language.chinese.whyChooseUs.visionmissionp : language.english.whyChooseUs.visionmissionp}
            </p>
            {/* <ul style={{ listStyleType: "disc", textAlign: "left" }}> */}
            <Row>
              {props.lan == '/' || props.lan == '/en' ?
                language.english.whyChooseUs.awards.map((x, i) => (

                  <Col sm={3}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img src={x?.icon} alt={"icon"} style={{
                        width: "80px",
                        marginBottom: "1rem"
                      }} />
                      <p style={{
                        textAlign: "center",
                        fontSize: "12px"
                      }}>{x?.title}</p>
                    </div>
                  </Col>

                ))
                :
                props.lan == '/ar' ? language.arabic.whyChooseUs.awards.map((x) => (
                  <Col sm={3}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img src={x?.icon} alt={"icon"} style={{
                        width: "80px",
                        marginBottom: "1rem"
                      }} />
                      <p style={{
                        textAlign: "center",
                        fontSize: "12px"
                      }}>{x?.title}</p>
                    </div>
                  </Col>
                ))
                  :
                  props.lan == '/ch' ? language.chinese.whyChooseUs.awards.map((x) => (
                    <Col sm={3}>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={x?.icon} alt={"icon"} style={{
                          width: "80px",
                          marginBottom: "1rem"
                        }} />
                        <p style={{
                          textAlign: "center",
                          fontSize: "12px"
                        }}>{x?.title}</p>
                      </div>
                    </Col>
                  ))
                    :
                    language.english.whyChooseUs.awards.map((x) => (
                      <Col sm={3}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <img src={x?.icon} alt={"icon"} style={{
                            width: "80px",
                            marginBottom: "1rem"
                          }} />
                          <p style={{
                            textAlign: "center",
                            fontSize: "12px"
                          }}>{x?.title}</p>
                        </div>
                      </Col>
                    )
                    )}
            </Row>
            {/* </ul> */}
            <br />
            <button class="rozella-btn rozella-btn3"
              onClick={scrollToBottom6}
            >
              <span class="shine"></span>
              <span>
                {
                  props.lan == '/' || props.lan == '/en' ?
                    "Connect With Us" :
                    props.lan == '/ch' ?
                      "联系我们" :
                      props.lan == '/ar' ?
                        "Connect With Us" :
                        "Connect With Us"
                }
              </span>
            </button>
          </Col>
          <Col lg={6} xs={12} sm="12"
            // style={{ background: `url(${Image2})`, backgroundSize: "cover", padding: "0px 0px" }}
            className={"chooseImageZoom"}
          >
            {/* <img src={Image2} alt={"img"} className={"img-fluid"} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
