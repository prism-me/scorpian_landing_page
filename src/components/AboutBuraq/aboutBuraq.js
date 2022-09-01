import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutBuraq.scss";
import aboutsection from "../../assets/aboutsection.png";

const AboutBuraq = ({ onChangeTab, lan, data }) => {
  console.log("tabdata", data);
  return (
    <div className="aboutWrap">
      <div className={`about-buraq-row`}>
        <Container>
          <h2 className="rozella-heading">Premium Properties on Offer</h2>
          <button
            className={`tabBtn ${data.tab === "tab1" && "active"}`}
            onClick={() => onChangeTab("tab1")}
          >
            {lan == "/" || lan == "/en"
              ? "Damac Lagoons"
              : lan == "/ch"
              ? "Damac Lagoons"
              : lan == "/ar"
              ? "Damac Lagoons"
              : "Damac Lagoons"}
          </button>
          <button
            className={`tabBtn ${data.tab === "tab2" && "active"}`}
            onClick={() => onChangeTab("tab2")}
          >
            {lan == "/" || lan == "/en"
              ? "Safa Two"
              : lan == "/ch"
              ? "Safa Two"
              : lan == "/ar"
              ? "Safa Two"
              : "Safa Two"}
          </button>
          <button
            className={`tabBtn ${data.tab === "tab3" && "active"}`}
            onClick={() => onChangeTab("tab3")}
          >
            {lan == "/" || lan == "/en"
              ? "Paramount Tower Hotel & Residences"
              : lan == "/ch"
              ? "Paramount Tower Hotel & Residences"
              : lan == "/ar"
              ? "Paramount Tower Hotel & Residences"
              : "Paramount Tower Hotel & Residences"}
          </button>
        </Container>
      </div>

      <Container>
        <Row className={`rozella-row`} id="why-invest-in-dubai">
          <Col lg={6} md={12} xs={12} sm={12}>
            <img
              src={aboutsection}
              style={{ width: "100%" }}
              // className="zoom-in-out-box"
            />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12}>
            <div class="rozella-heading">
              {lan == "/" || lan == "/en"
                ? data?.data.english.whyInvestInDubai.header
                : lan == "/ar"
                ? data?.data.arabic.whyInvestInDubai.header
                : lan == "/ch"
                ? data?.data.chinese.whyInvestInDubai.header
                : data?.data.english.whyInvestInDubai.header}
            </div>
            {/* <p className="first">t
              {lan == "/" || lan == "/en"
                ? data.english.whyInvestInDubai.firstLine
                : lan == "/ar"
                ? data.arabic.whyInvestInDubai.firstLine
                : lan == "/ch"
                ? data.chinese.whyInvestInDubai.firstLine
                : data.english.whyInvestInDubai.firstLine}
            </p> */}
            <p className="rozella-para">
              {lan == "/" || lan == "/en"
                ? data?.data.english.whyInvestInDubai.paragraph1
                : lan == "/ar"
                ? data?.data.arabic.whyInvestInDubai.paragraph1
                : lan == "/ch"
                ? data?.data.chinese.whyInvestInDubai.paragraph1
                : data?.data.english.whyInvestInDubai.paragraph1}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutBuraq;
