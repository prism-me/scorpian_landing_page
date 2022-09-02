import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./events.scss";
import Contact from "../../assets/post.jpg";
import { language } from "../../data/language.js";

const Events = (props) => {
  return (
    <div className="events">
      <Container>
        <Row className={`rozella-row`} id="why-choose">
          <Col
            lg={6}
            md={12}
            xs={12}
            sm={12}
            className="d-flex flex-column justify-content-center"
          >
            <div class="rozella-heading">
              {props.lan == "/" || props.lan == "/en"
                ? language.en.events.header
                : props.lan == "/gu"
                ? language.gu.events.header
                : language.en.events.header}
            </div>
            <p className="first">
              {props.lan == "/" || props.lan == "/en"
                ? language.en.events.firstLine
                : props.lan == "/gu"
                ? language.gu.events.firstLine
                : language.en.events.firstLine}
            </p>
            <p className="rozella-para">
              {props.lan == "/" || props.lan == "/en"
                ? language.en.events.paragraph1
                : props.lan == "/gu"
                ? language.gu.events.paragraph1
                : language.en.events.paragraph1}
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

export default Events;
