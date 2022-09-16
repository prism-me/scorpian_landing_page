import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutBuraq.scss";

const AboutBuraq = ({ onChangeTab, lan, data }) => {
  return (
    <div className="aboutWrap">
      <div className={`about-buraq-row`}>
        <Container>
          <h2 className="rozella-heading">
            {lan == "/" || lan == "/en"
              ? "Premium Properties on Offer"
              : lan == "/gu"
              ? "ઓફર પર પ્રીમીયમ પ્રોપર્ટી"
              : "Premium Properties on Offer"}
          </h2>
          <button
            className={`tabBtn ${data.tab === "tab1" && "active"}`}
            onClick={() => onChangeTab("tab1")}
          >
            {lan == "/" || lan == "/en"
              ? "Damac Lagoons"
              : lan == "/gu"
              ? "Damac Lagoons"
              : "Damac Lagoons"}
          </button>
          <button
            className={`tabBtn ${data.tab === "tab2" && "active"}`}
            onClick={() => onChangeTab("tab2")}
          >
            {lan == "/" || lan == "/en"
              ? "Safa Two"
              : lan == "/gu"
              ? "Safa Two"
              : "Safa Two"}
          </button>
          <button
            className={`tabBtn ${data.tab === "tab3" && "active"}`}
            onClick={() => onChangeTab("tab3")}
          >
            {lan == "/" || lan == "/en"
              ? "Paramount Tower Hotel & Residences"
              : lan == "/gu"
              ? "Paramount Tower Hotel & Residences"
              : "Paramount Tower Hotel & Residences"}
          </button>
        </Container>
      </div>

      <Container>
        <Row className={`rozella-row`} id="why-invest-in-dubai">
          <Col lg={6} md={12} xs={12} sm={12}>
            <img
              src={
                lan == "/" || lan == "/en"
                  ? data?.data.en.whyInvestInDubai.img
                  : lan == "/gu"
                  ? data?.data.gu.whyInvestInDubai.img
                  : data?.data.en.whyInvestInDubai.img
              }
              style={{ width: "100%" }}
              // className="zoom-in-out-box"
            />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            <div class="rozella-heading">
              {lan == "/" || lan == "/en"
                ? data?.data.en.whyInvestInDubai.header
                : lan == "/gu"
                ? data?.data.gu.whyInvestInDubai.header
                : data?.data.en.whyInvestInDubai.header}
            </div>
            <p className="rozella-para">
              {lan == "/" || lan == "/en"
                ? data?.data.en.whyInvestInDubai.paragraph1
                : lan == "/gu"
                ? data?.data.gu.whyInvestInDubai.paragraph1
                : data?.data.en.whyInvestInDubai.paragraph1}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutBuraq;
