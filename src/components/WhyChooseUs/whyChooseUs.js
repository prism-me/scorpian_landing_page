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
                ? language.en.whyChooseUs.header
                : props.lan == "/gu"
                ? language.gu.whyChooseUs.header
                : language.en.whyChooseUs.header}
            </div>
            <p className="first">
              {props.lan == "/" || props.lan == "/en"
                ? language.en.whyChooseUs.firstLine
                : props.lan == "/gu"
                ? language.gu.whyChooseUs.firstLine
                : language.en.whyChooseUs.firstLine}
            </p>
            <p className="rozella-para">
              {props.lan == "/" || props.lan == "/en"
                ? language.en.whyChooseUs.paragraph1
                : props.lan == "/gu"
                ? language.gu.whyChooseUs.paragraph1
                : language.en.whyChooseUs.paragraph1}
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
