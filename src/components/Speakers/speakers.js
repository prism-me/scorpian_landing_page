import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import person2 from "./../../assets/DSC04426.JPG";
import person1 from "./../../assets/Fabrizio.jpeg";
import { content } from "../../data/data";
import "./speakers.scss";

const Speakers = (props) => {
  return (
    <div className="speakers_main">
      <Container>
        <h5 className="about-buraq-heading webinar_title">Our Speakers</h5>
        <Row>
          <Col xs={12} sm={6}>
            <div className="speakers_data">
              <img src={person1} width={200} />
              <h2>Fabrizio Vagli</h2>
              <span>Sales and Marketing Director</span>
              <p className="about-text-detail">AIRLIFE SWISS AG <br></br>
                HVAC Engineer, EMBA in International Management and Affairs <br></br>
                25 years of experience in the HVAC industry.<br></br>
                Experienced through all phases in the lifetime of an HVAC plant, from design, installation up to commissioning and maintaining.</p>
            </div>
          </Col >
          <Col xs={12} sm={6}>
            <div className="speakers_data">
              <img src={person2} width={200} />
              <h2>Elina Krassotina</h2>
              <span>Business Development & Marketing</span>
              <p className="about-text-detail">DAVINCI MENAGROUP DWC-LLC <br></br>
                MSc Strategic Marketing <br></br>
                B.S. Computer Engineer <br></br>
                8 years of Pre-sales & Consultancy experience in MENA region</p>

            </div>
          </Col>
        </Row >
      </Container >
    </div >
  );
};

export default Speakers;
