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
              Eu Amet Diam.
            </div>
            <div class="rozella-heading">
              Why Choose Us
            </div>
            <ul style={{listStyleType: "disc"}}>
              <li>Ut nibh at vel eu amet ligula cras vel semper. Sed non, diam et sit nisi. Facilisis eu habitant elit semper fringilla consectetur id diam ac.</li>
              <li>Sociis odio elit cras risus facilisis cum. Vitae, risus bibendum quam eu a nunc. A eget magna felis, at.</li>
              <li>Donec velit augue auctor adipiscing non egestas neque. Augue praesent egestas pellentesque natoque orci proin euismod.</li>
              <li>Elementum id viverra mi volutpat. Purus varius cursus aenean aliquet. Purus et semper augue facilisis amet.</li>
              <li>Ornare consectetur amet, in orci mi pellentesque. Lectus sed enim, proin dignissim nisl et ultricies.</li>
              <li>Morbi fusce fringilla dictum venenatis, ipsum placerat. Sociis mi auctor bibendum facilisis aenean tincidunt.</li>
            </ul>
            <br />
            <a href="#" class="rozella-btn rozella-btn3">
              <span class="shine"></span>
              <span>CTA EXAMPLE</span>
            </a>
          </Col>
          <Col lg={6} xs={12} sm="12" style={{background: `url(${Image2})`, backgroundSize: "cover", padding: "0px 0px"}}>
            {/* <img src={Image1} /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
