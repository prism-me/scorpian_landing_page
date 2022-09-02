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
                ? language.english.events.header
                : props.lan == "/ar"
                ? language.arabic.events.header
                : props.lan == "/ch"
                ? language.chinese.events.header
                : language.english.events.header}
            </div>
            <p className="first">
              {props.lan == "/" || props.lan == "/en"
                ? language.english.events.firstLine
                : props.lan == "/ar"
                ? language.arabic.events.firstLine
                : props.lan == "/ch"
                ? language.chinese.events.firstLine
                : language.english.events.firstLine}
            </p>
            <p className="rozella-para">
              {props.lan == "/" || props.lan == "/en"
                ? language.english.events.paragraph1
                : props.lan == "/ar"
                ? language.arabic.events.paragraph1
                : props.lan == "/ch"
                ? language.chinese.events.paragraph1
                : language.english.events.paragraph1}
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
