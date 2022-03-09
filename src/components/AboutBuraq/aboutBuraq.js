import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import carImage from "./../../assets/About/about-img.jpg";
import person2 from "./../../assets/DSC04426.JPG";
import person1 from "./../../assets/Fabrizio.jpeg";
import sliderEnglish1 from "./../../assets/sliderImages/airlife-sa-stand-alone-device1.png";
import { content } from "./../../data/data";
import "./aboutBuraq.scss";

import Image1 from "./../../assets/Images/LandingPage/Rozella-Image1.png";
import RozellaDesign from "./../../assets/Images/LandingPage/Rozella-Design.png";
import RozellaLine1 from "./../../assets/Images/LandingPage/Rozella-Line-Long.png";
import RozellaLine2 from "./../../assets/Images/LandingPage/Rozella-Line-Short.png";

import language from "./../../data/language.json";

const AboutBuraq = (props) => {
  return (
    <div className="about-buraq-wrap">
      <Container>
        <Row
          className={`about-buraq-row ${props.activeLanguage === "arabic"
            ? "about-arabic-style"
            : "english"
            }`}
        >
          <Col lg={4} xs={12} sm={12}>
            {/* <div
              className={`about-text-wrap ${props.activeLanguage === "arabic"
                ? "about-arabic-text-wrap"
                : "english"
                }`}
            >
              <div
                className={`${props.activeLanguage === "arabic"
                  ? "about-arabic-text"
                  : "english"
                  }`}
              >
                <h2 className="about-buraq-heading">
                  مرحبا بكم في بوهن ستوديو للتصميمات والديكورات الداخلية
                </h2>
                <p className="about-text-detail">
                  We are a company that provides a comprehensive building engineering service, which includes all the steps that the client will be needing starting from buying their land or home till receiving the key of their house designed and implemented.
                </p>
                <p className="about-text-detail">
                  Our points of strength comes from a strong engineering design team powered by a very powerful execution team consists of 70 technicians working in all fields. The key strength which is a weakness in other design houses that they design something no one can execute because they lack the execution experience which we don't.
                </p>
              </div>
            </div> */}
            <a href="#why-invest-in-dubai" class="rozella-btn rozella-btn2">
                    <span class="shine"></span>
                    <span>Why Invest In Dubai</span>
                  </a>

          </Col>
          <Col lg={4} xs={12} sm={12}>
          <a href="#why-choose-us" class="rozella-btn rozella-btn2">
                    <span class="shine"></span>
                    <span>Why Choose Us</span>
          </a>
          </Col>
          <Col  lg={4} xs={12} sm={12}>
          <a href="#reasons-to-invest-in-dubai" class="rozella-btn rozella-btn2">
                    <span class="shine"></span>
                    <span>Reasons To Invest In Dubai</span>
          </a>
          </Col>
        </Row>
        <Row
          className={`about-buraq-row ${props.activeLanguage === "arabic"
          ? "about-arabic-style"
          : "english"
          }
          rozella-row`}
          id="why-invest-in-dubai"
        >
          <Col lg={6} md={12} xs={12} sm={12}>
            <img src={Image1} style={{width: "100%"}} />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12} >
            <div class="rozella-heading">
              <span style={{position: "relative"}}>
                <img src={RozellaDesign} className="rozella-wing-design" />
                {props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.header : props.lan == '/ar' ? 'arabic@mail.com' : props.lan == '/ch' ? language.chinese.whyInvestInDubai.header : ""}
                <img src={RozellaLine1} className="rozella-line1"/>
                <img src={RozellaLine2} className="rozella-line2"/>
              </span>
            </div>
            <p className="first">{props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.firstLine : props.lan == '/ar' ? 'arabic@mail.com' : props.lan == '/ch' ? language.chinese.whyInvestInDubai.firstLine : ""}</p>
            <p className="rozella-para">{props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.paragraph1 : props.lan == '/ar' ? 'arabic@mail.com' : props.lan == '/ch' ? language.chinese.whyInvestInDubai.paragraph1 : ""}</p>
            <p className="rozella-para">{props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.paragraph2 : props.lan == '/ar' ? 'arabic@mail.com' : props.lan == '/ch' ? language.chinese.whyInvestInDubai.paragraph1 : ""}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutBuraq;
