import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./buraqSlider.scss";
import { content } from "./../../data/data";
import { IoPlayOutline } from "react-icons/io5";
import ModalVideo from "react-modal-video";


function VideoSlider(props) {
  const [openVideo, setOpenVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { global } = props;
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
        {content?.home?.sliderSection?.sliderData?.map((x, index) => (
          <div>
            <div className="video-image-wrapper">
              {/* {x?.[props.activeLanguage].youtubelink && (
                <div
                  className="play-button-wrap"
                >
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
              )} */}
              <img
                src={x?.[props.activeLanguage].image}
                alt=""
                loading="lazy"
              />
              {/* <a
                href={x?.[props.activeLanguage].youtubelink}
                className="popup-youtube video-play-icon d-inline-block"
              >
                <span
                  className="ti-control-play"
                  style={{ color: "#2E3751" }}
                ></span>
              </a> */}

            </div>
            <div className="slide-content py-3">
              <h5>{x?.[props.activeLanguage].text}</h5>
              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html:
                    x?.[props.activeLanguage].description,
                }}
              ></div>
              <br />
              <a href="#" class="rozella-btn">
                <span class="shine"></span>
                <span>ENQUIRE NOW</span></a>
            </div>
          </div>
        ))}
      </Carousel>
      <ModalVideo
        channel="youtube"
        autoplay= {1}
        isOpen={openVideo}
        videoId={
          content?.home?.sliderSection?.sliderData[currentIndex]?.[props.activeLanguage].youtubelink?.split("/watch?v=")[1]
        }
        onClose={() => setOpenVideo(false)}
      />


      {/* {content?.home?.sliderSection?.sliderData?.map(
          (x, index) => (

            <div key={index} className="product-slider">
              <img
                src={x?.[props.activeLanguage].image}
                alt=""
              />
              <div className="video-promo-content mt-4 text-center">
                <a
                  href={x?.[props.activeLanguage].youtubelink}
                  className="popup-youtube video-play-icon d-inline-block"
                >
                  <span
                    className="ti-control-play"
                    style={{ color: "#2E3751" }}
                  ></span>
                </a>

              </div>
              <div className="buhen-slider-description">
                <h5
                  className={`slider-heading ${props.activeLanguage === "arabic"
                    ? "slider-arabic-title"
                    : "english"
                    }`}
                >
                  {x?.[props.activeLanguage].text}
                </h5>
                <p className="about-text-detail">
                  {x?.[props.activeLanguage].description}
                </p>
              </div>
            </div>
          )
        )} */}
    </div>
  );
}

export default VideoSlider;
