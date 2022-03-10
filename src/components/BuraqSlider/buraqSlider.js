import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./buraqSlider.scss";
import { content } from "./../../data/data";
import { IoPlayOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";

import {language} from "../../data/language.js";


function VideoSlider(props) {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { global } = props;

  const englishSlider = language.english.reasonsToInvestInDubai.slider;
  const arabicSlider = language.english.reasonsToInvestInDubai.slider;
  const chineseSlider = language.chinese.reasonsToInvestInDubai.slider;

  let languageSlider;

  if (props.lan == '/' || props.lan == '/en') {
    languageSlider = englishSlider.map((x) => {
      return <div>
        <div className="video-image-wrapper">
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a href="#" class="rozella-btn">
            <span class="shine"></span>
            <span>ENQUIRE NOW</span>
          </a>
        </div>
      </div>
      })
  } else if (props.lan == '/ar') {
    languageSlider = arabicSlider.map((x) => {
      return <div>
        <div className="video-image-wrapper">
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a href="#" class="rozella-btn">
            <span class="shine"></span>
            <span>ENQUIRE NOW</span>
          </a>
        </div>
      </div>
      })
  } else if (props.lan == '/ch') {
    languageSlider = chineseSlider.map((x) => {
      return <div>
        <div className="video-image-wrapper">
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a href="#" class="rozella-btn">
            <span class="shine"></span>
            <span>ENQUIRE NOW</span>
          </a>
        </div>
      </div>
      })
  } else {
    languageSlider = englishSlider.map((x) => {
      return <div>
        <div className="video-image-wrapper">
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a href="#" class="rozella-btn">
            <span class="shine"></span>
            <span>ENQUIRE NOW</span>
          </a>
        </div>
      </div>
      })
  }
  
  return (
    <div className="video-slider" id="reasons-to-invest-in-dubai">
      <Container>
        <Row
          className={`video-row ${props.activeLanguage === "arabic"
            ? "about-arabic-style"
            : "english"
            }`}
        >
          <h3 className="rozella-heading">
            Reasons To Invest In Dubai
          </h3>
        </Row>
      </Container>

      <Carousel
        dynamicHeight={false}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        centerMode
        stopOnHover={true}
        centerSlidePercentage={`${window.screen.width > 768 ? 60 : 100
          }`}
        className="video-carousel center"
        interval={3000}

      >
        {languageSlider}
      </Carousel>
    </div>
  );
}

export default VideoSlider;