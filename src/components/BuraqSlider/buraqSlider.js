import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./buraqSlider.scss";
import { IoPlayOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";
import { language } from "../../data/language.js";


function VideoSlider(props) {
  const scrollToBottom7 = () => {
    const bottomEle = document.getElementById("top-banner-form");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  }


  const [openVideo, setOpenVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { global } = props;

  const englishSlider = language.english.reasonsToInvestInDubai.slider;
  const arabicSlider = language.english.reasonsToInvestInDubai.slider;
  const chineseSlider = language.chinese.reasonsToInvestInDubai.slider;

  let languageSlider;

  if (props.lan == '/' || props.lan == '/en') {
    languageSlider = englishSlider.map((x, index) => {
      return <div>
        <div className="video-image-wrapper">
          {x.video_link && (
            <div className="play-button-wrap">
              <div
                className="play-button"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpenVideo(true);
                }}
              >
                <IoPlayOutline />
              </div>
            </div>
          )}
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3 px-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a class="rozella-btn"
            onClick={scrollToBottom7}
            style={{ cursor: "pointer" }}
          >
            <span class="shine"></span>
            <span>CONTACT US</span>
          </a>
        </div>
      </div>
    })
  } else if (props.lan == '/ar') {
    languageSlider = arabicSlider.map((x, index) => {
      return <div>
        <div className="video-image-wrapper">
          {x.video_link && (
            <div className="play-button-wrap">
              <div
                className="play-button"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpenVideo(true);
                }}
              >
                <IoPlayOutline />
              </div>
            </div>
          )}
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3 px-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a class="rozella-btn"
            onClick={scrollToBottom7}
            style={{ cursor: "pointer" }}
          >
            <span class="shine"></span>
            <span>CONTACT US</span>
          </a>
        </div>
      </div>
    })
  } else if (props.lan == '/ch') {
    languageSlider = chineseSlider.map((x, index) => {
      return <div>
        <div className="video-image-wrapper">
          {x.video_link && (
            <div className="play-button-wrap">
              <div
                className="play-button"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpenVideo(true);
                }}
              >
                <IoPlayOutline />
              </div>
            </div>
          )}
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3 px-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a class="rozella-btn"
            onClick={scrollToBottom7}
            style={{ cursor: "pointer" }}
          >
            <span class="shine"></span>
            <span>联系我们</span>
          </a>
        </div>
      </div>
    })
  } else {
    languageSlider = englishSlider.map((x, index) => {
      return <div>
        <div className="video-image-wrapper">
          {x.video_link && (
            <div className="play-button-wrap">
              <div
                className="play-button"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpenVideo(true);
                }}
              >
                <IoPlayOutline />
              </div>
            </div>
          )}
          <img src={x.sliderImage} alt="" loading="lazy" />
        </div>
        <div className="slide-content py-3 px-3">
          <h5>{x.sliderTitle}</h5>
          <div className="description">{x.sliderDescription}</div>
          <br />
          <a class="rozella-btn"
            onClick={scrollToBottom7}
            style={{ cursor: "pointer" }}
          >
            <span class="shine"></span>
            <span>CONTACT US</span>
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
            {
              props.lan == '/' || props.lan == '/en' ?
                language.english.reasonsToInvestInDubai.header
                : props.lan == '/ch' ?
                  language.chinese.reasonsToInvestInDubai.header
                  : props.lan == '/ar' ?
                    language.arabic.reasonsToInvestInDubai.header
                    :
                    language.arabic.reasonsToInvestInDubai.header
            }
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
      {
        props.lan == '/' || props.lan == '/en' ?
          <ModalVideo
            channel="custom"
            isOpen={openVideo}
            autoPlay={1}
            url={englishSlider[currentIndex]?.video_link}
            // videoId={englishSlider[currentIndex]?.video_link?.split("/")[3]}
            onClose={() => setOpenVideo(false)}
          />
          : props.lan == '/ch' ?
            <ModalVideo
              channel="custom"
              isOpen={openVideo}
              autoPlay={1}
              url={chineseSlider[currentIndex]?.video_link}
              // videoId={chineseSlider[currentIndex]?.video_link?.split("/")[3]}
              onClose={() => setOpenVideo(false)}
            /> : props.lan == '/ar' ?
              <ModalVideo
                channel="custom"
                isOpen={openVideo}
                autoPlay={1}
                url={arabicSlider[currentIndex]?.video_link}
                // videoId={arabicSlider[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
              /> :
              <ModalVideo
                channel="custom"
                isOpen={openVideo}
                autoPlay={1}
                url={englishSlider[currentIndex]?.video_link}
                // videoId={englishSlider[currentIndex]?.video_link?.split("/")[3]}
                onClose={() => setOpenVideo(false)}
              />
      }

    </div>
  );
}

export default VideoSlider;
