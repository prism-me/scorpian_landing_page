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
            <div class="rozella-subheading">
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.subheader : props.lan == '/ar' ? language.arabic.whyChooseUs.subheader : props.lan == '/ch' ? language.chinese.whyChooseUs.subheader : language.english.whyChooseUs.subheader}
            </div>
            <div class="rozella-heading">
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.header : props.lan == '/ar' ? language.arabic.whyChooseUs.header : props.lan == '/ch' ? language.chinese.whyChooseUs.header : language.english.whyChooseUs.header}
            </div>
            <ul style={{ listStyleType: "disc", textAlign: "left" }}>
              {props.lan == '/' || props.lan == '/en' ? language.english.whyChooseUs.content.map((x) => { return <li>{x}</li> }) : props.lan == '/ar' ? language.arabic.whyChooseUs.content.map((x) => { return <li>{x}</li> }) : props.lan == '/ch' ? language.chinese.whyChooseUs.content.map((x) => { return <li>{x}</li> }) : language.english.whyChooseUs.content.map((x) => { return <li>{x}</li> })}
            </ul>
            <br />
            <a href="#" class="rozella-btn rozella-btn3">
              <span class="shine"></span>
              <span>
                {
                  props.lan == '/' || props.lan == '/en' ?
                    "CTA EXAMPLE" :
                    props.lan == '/ch' ?
                      "CTA 示例" :
                      props.lan == '/ar' ?
                        "CTA EXAMPLE" :
                        "CTA EXAMPLE"
                }
              </span>
            </a>
          </Col>
          <Col lg={6} xs={12} sm="12"
            // style={{ background: `url(${Image2})`, backgroundSize: "cover", padding: "0px 0px" }}
            className={"chooseImageZoom"}
          >
            {/* <img src={Image1} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
