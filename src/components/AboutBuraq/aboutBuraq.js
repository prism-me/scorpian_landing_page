import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./aboutBuraq.scss";

import dubaigif from "../../assets/Dubai_Falls2.gif"

import RozellaDesign from "./../../assets/Images/LandingPage/Rozella-Design.png";
import RozellaLine1 from "./../../assets/Images/LandingPage/Rozella-Line-Long.png";
import RozellaLine2 from "./../../assets/Images/LandingPage/Rozella-Line-Short.png";

import { language } from "../../data/language.js";

const AboutBuraq = (props) => {


  const scrollToBottom1 = () => {
    const bottomEle = document.getElementById("why-invest-in-dubai");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToBottom2 = () => {
    const bottomEle = document.getElementById("why-choose-us");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToBottom3 = () => {
    const bottomEle = document.getElementById("reasons-to-invest-in-dubai");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }
  const scrollToBottom4 = () => {
    const bottomEle = document.getElementById("our-team");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }

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
            <button class="rozella-btn rozella-btn2"
              onClick={scrollToBottom1}
            >
              <span class="shine"></span>
              <span>
                {
                  props.lan == '/' || props.lan == '/en' ?
                    "Why Invest In Dubai?" :
                    props.lan == '/ch' ?
                      "为什么投资迪拜？" :
                      props.lan == '/ar' ?
                        "Why Invest In Dubai?" :
                        "Why Invest In Dubai?"
                }
              </span>
            </button>

          </Col>
          <Col lg={4} xs={12} sm={12}>
            <button class="rozella-btn rozella-btn2"
              onClick={scrollToBottom2}
            >
              <span class="shine"></span>
              <span>

                {
                  props.lan == '/' || props.lan == '/en' ?
                    "Why Choose Us?" :
                    props.lan == '/ch' ?
                      " 为什么选择我们？" :
                      props.lan == '/ar' ?
                        "Why Choose Us?" :
                        "Why Choose Us?"
                }
              </span>
            </button>
          </Col>
          <Col lg={4} xs={12} sm={12}>
            <button class="rozella-btn rozella-btn2"
              onClick={scrollToBottom3}
            >
              <span class="shine"></span>
              <span>
                {
                  props.lan == '/' || props.lan == '/en' ?
                    "Investment Opportunities" :
                    props.lan == '/ch' ?
                      "投资机会" :
                      props.lan == '/ar' ?
                        "Investment Opportunities" :
                        "Investment Opportunities"
                }
              </span>
            </button>
          </Col>
          {/* <Col lg={3} xs={12} sm={12}>
            <button class="rozella-btn rozella-btn2"
              onClick={scrollToBottom4}
            >
              <span class="shine"></span>
              <span>
                {
                  props.lan == '/' || props.lan == '/en' ?
                    "Our Team" :
                    props.lan == '/ch' ?
                      "我们的队伍" :
                      props.lan == '/ar' ?
                        "Our Team" :
                        "Our Team"
                }
              </span>
            </button>
          </Col> */}
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
            <img src={dubaigif} style={{ width: "100%" }}
            // className="zoom-in-out-box"
            />
          </Col>
          <Col lg={6} md={12} xs={12} sm={12} >
            <div class="rozella-heading">
              <span style={{ position: "relative" }}>
                <img src={RozellaDesign} className="rozella-wing-design" />
                {props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.header : props.lan == '/ar' ? language.arabic.whyInvestInDubai.header : props.lan == '/ch' ? language.chinese.whyInvestInDubai.header : language.english.whyInvestInDubai.header}
                <img src={RozellaLine1} className="rozella-line1" />
                <img src={RozellaLine2} className="rozella-line2" />
              </span>
            </div>
            <p className="first">{props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.firstLine : props.lan == '/ar' ? language.arabic.whyInvestInDubai.firstLine : props.lan == '/ch' ? language.chinese.whyInvestInDubai.firstLine : language.english.whyInvestInDubai.firstLine}</p>
            <p className="rozella-para">{props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.paragraph1 : props.lan == '/ar' ? language.arabic.whyInvestInDubai.paragraph1 : props.lan == '/ch' ? language.chinese.whyInvestInDubai.paragraph1 : language.english.whyInvestInDubai.paragraph1}</p>
            <ul style={{ listStyleType: "disc", paddingLeft: "15px", textAlign: "left" }}>
              {props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.content.map((x) => { return <li>{x}</li> }) : props.lan == '/ar' ? language.arabic.whyInvestInDubai.content.map((x) => { return <li>{x}</li> }) : props.lan == '/ch' ? language.chinese.whyInvestInDubai.content.map((x) => { return <li>{x}</li> }) : language.english.whyInvestInDubai.content.map((x) => { return <li>{x}</li> })}
            </ul>
            {/* <p className="rozella-para">{props.lan == '/' || props.lan == '/en' ? language.english.whyInvestInDubai.paragraph2 : props.lan == '/ar' ? language.arabic.whyInvestInDubai.paragraph2 : props.lan == '/ch' ? language.chinese.whyInvestInDubai.paragraph1 : language.english.whyInvestInDubai.paragraph2}</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutBuraq;