import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./whyChooseUs.scss";
import Contact from "../../assets/aboutscropion.jpg";
import { language } from "../../data/language.js";

const WhyChooseUs = (props) => {
  return (
    <div className="about-Properties-wrap">
      <Container>
        <Row className={`rozella-row`} id="why-choose">
          <Col lg={6} md={12} xs={12} sm={12}>
            <div class="rozella-heading">
              {props.lan == "/" || props.lan == "/en"
                ? language.english.whyChooseUs.header
                : props.lan == "/ar"
                ? language.arabic.whyChooseUs.header
                : props.lan == "/ch"
                ? language.chinese.whyChooseUs.header
                : language.english.whyChooseUs.header}
            </div>
            <p className="first">
              {props.lan == "/" || props.lan == "/en"
                ? language.english.whyChooseUs.firstLine
                : props.lan == "/ar"
                ? language.arabic.whyChooseUs.firstLine
                : props.lan == "/ch"
                ? language.chinese.whyChooseUs.firstLine
                : language.english.whyChooseUs.firstLine}
            </p>
            <p className="rozella-para">
              {props.lan == "/" || props.lan == "/en"
                ? language.english.whyChooseUs.paragraph1
                : props.lan == "/ar"
                ? language.arabic.whyChooseUs.paragraph1
                : props.lan == "/ch"
                ? language.chinese.whyChooseUs.paragraph1
                : language.english.whyChooseUs.paragraph1}
            </p>
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            <img
              src={Contact}
              style={{ width: "100%" }}
              // className="zoom-in-out-box"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
