import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { content } from "../../data/data";
import "./webinar.scss";
// import Speakers from "../Speakers";

const Webinar = (props) => {
  return (
    <div className="Webinar_main_col">
      <Container>
      <h5 className="about-buraq-heading webinar_title">About The Webinar</h5>
        <Row>
          <Col xs={12} sm={8} className="mobile-control-text">
            <div className="webinar_text">
              <h5 className="about-buraq-heading">
                {
                  content?.home?.webinarData?.title[
                  props.activeLanguage
                  ]
                }
              </h5>
              <ul>
                <li>Overview of Air quality in the Middle East region</li>
                <li>Current challenges that various industries face related to air quality in:
                  <ul>
                    <li>Hospitals, Labs and Preventive institutions</li>
                    <li>Education facilities</li>
                    <li>Restaurants, bars and cafes</li>
                    <li>Business centers, shopping and entertainment complexes and other places with high traffic;</li>
                    <li>Smoking areas and smoking rooms;</li>
                    <li>In various industries, for example, food and chemical;</li>
                    <li>Apartments and private houses.</li>
                    <li>At sewage pumping stations and sewage treatment plants;</li>
                  </ul>
                </li>
                <li>Ways to improve Indoor Air Quality and people's overall wellbeing;</li>
                <li>Mitigation the risk of SARS-Cov-2 spreading within home and working environments</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={4} className="mobile-control-badge">
            <div className="webinar_sche">
              <h5 className="about-buraq-heading">Date & Time</h5>
              <p><span>Date:</span> Thursday 9th December 2021</p>
              <p><span>Time:</span> 3:00pm Gulf Standard Time</p>
              <p><span>Platform:</span> Zoom Webinar</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Webinar;
