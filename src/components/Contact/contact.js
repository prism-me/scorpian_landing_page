import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.scss";
import contactsection from "../../assets/contactsection.jpg";
import ZohoBannerForm from "../ZohoBannerForm/ZohoBannerForm.js";

const Contact = (props) => {
  return (
    <div className="contactWrap">
      <Container>
        <Row className={`rozella-row`} id="why-invest-in-dubai">
          <Col lg={6} md={12} xs={12} sm={12}>
            <img
              src={contactsection}
              style={{ width: "100%" }}
              // className="zoom-in-out-box"
            />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            <ZohoBannerForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
