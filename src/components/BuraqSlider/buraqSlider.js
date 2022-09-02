import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "react-bootstrap";
import "./buraqSlider.scss";

function VideoSlider({ data, lan }) {
  let propertyData;
  if (lan === "/en") {
    propertyData = data?.data?.en?.reasonsToInvestInDubai;
  } else if (lan === "/gu") {
    propertyData = data?.data?.gu?.reasonsToInvestInDubai;
  } else {
    propertyData = data?.data?.en?.reasonsToInvestInDubai;
  }

  const [activePropertyData, setPropertyData] = useState(propertyData[0]);

  const onChangePropertyTab = (tabtext) => {
    propertyData.forEach((item) => {
      if (item.PropertyTab === tabtext) {
        setPropertyData(item);
      }
    });
  };

  const scrollToBottom7 = () => {
    const bottomEle = document.getElementById("top-banner-form");
    bottomEle.scrollIntoView({ behavior: "smooth" });
  };

  let languageSlider;

  let PropertySlider;

  if (data?.tab === "tab1") {
    const englishPropertySlider = activePropertyData?.data.slider;
    const gujratiPropertySlider = activePropertyData?.data.slider;

    if (lan == "/" || lan == "/en") {
      PropertySlider = englishPropertySlider.map((x, index) => {
        return (
          <div key={index}>
            <div className="video-image-wrapper">
              <img src={x.sliderImage} alt="" loading="lazy" />
            </div>
            <div className="slide-content py-3 px-3">
              <h5>{x.sliderTitle}</h5>
              <div className="description">{x.sliderDescription}</div>
              <br />
              <button className="rozella-btn" onClick={scrollToBottom7}>
                Enquire Now
              </button>
            </div>
          </div>
        );
      });
    } else if (lan == "/gu") {
      PropertySlider = gujratiPropertySlider.map((x, index) => {
        return (
          <div key={index}>
            <div className="video-image-wrapper">
              <img src={x.sliderImage} alt="" loading="lazy" />
            </div>
            <div className="slide-content py-3 px-3">
              <h5>{x.sliderTitle}</h5>
              <div className="description">{x.sliderDescription}</div>
              <br />
              <button className="rozella-btn" onClick={scrollToBottom7}>
                હવે પૂછપરછ કરો
              </button>
            </div>
          </div>
        );
      });
    } else {
      PropertySlider = englishPropertySlider.map((x, index) => {
        return (
          <div key={index}>
            <div className="video-image-wrapper">
              <img src={x.sliderImage} alt="" loading="lazy" />
            </div>
            <div className="slide-content py-3 px-3">
              <h5>{x.sliderTitle}</h5>
              <div className="description">{x.sliderDescription}</div>
              <br />
              <button className="rozella-btn" onClick={scrollToBottom7}>
                Enquire Now
              </button>
            </div>
          </div>
        );
      });
    }
  } else {
    const englishSlider = data?.data.en.reasonsToInvestInDubai.slider;
    const gujratiSlider = data?.data.gu.reasonsToInvestInDubai.slider;

    if (lan == "/" || lan == "/en") {
      languageSlider = englishSlider.map((x, index) => {
        return (
          <div key={index}>
            <div className="video-image-wrapper">
              <img src={x.sliderImage} alt="" loading="lazy" />
            </div>
            <div className="slide-content py-3 px-3">
              <h5>{x.sliderTitle}</h5>
              <div className="description">{x.sliderDescription}</div>
              <br />
              <button className="rozella-btn" onClick={scrollToBottom7}>
                Enquire Now
              </button>
            </div>
          </div>
        );
      });
    } else if (lan == "/gu") {
      languageSlider = gujratiSlider.map((x, index) => {
        return (
          <div key={index}>
            <div className="video-image-wrapper">
              <img src={x.sliderImage} alt="" loading="lazy" />
            </div>
            <div className="slide-content py-3 px-3">
              <h5>{x.sliderTitle}</h5>
              <div className="description">{x.sliderDescription}</div>
              <br />
              <button className="rozella-btn" onClick={scrollToBottom7}>
                હવે પૂછપરછ કરો
              </button>
            </div>
          </div>
        );
      });
    } else {
      languageSlider = englishSlider.map((x, index) => {
        return (
          <div key={index}>
            <div className="video-image-wrapper">
              <img src={x.sliderImage} alt="" loading="lazy" />
            </div>
            <div className="slide-content py-3 px-3">
              <h5>{x.sliderTitle}</h5>
              <div className="description">{x.sliderDescription}</div>
              <br />
              <button className="rozella-btn" onClick={scrollToBottom7}>
                Enquire Now
              </button>
            </div>
          </div>
        );
      });
    }
  }

  return (
    <div className="video-slider" id="reasons-to-invest-in-dubai">
      <Container>
        {data?.tab === "tab1" && (
          <center>
            <button
              className={`sliderBtn ${
                activePropertyData.PropertyTab === "malta" && "active"
              }`}
              onClick={() => onChangePropertyTab("malta")}
            >
              Malta{" "}
            </button>{" "}
            /{" "}
            <button
              className={`sliderBtn ${
                activePropertyData.PropertyTab === "venice" && "active"
              }`}
              onClick={() => onChangePropertyTab("venice")}
            >
              {" "}
              Venice
            </button>
          </center>
        )}
      </Container>

      {data?.tab === "tab1" ? (
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
          centerSlidePercentage={`${window.screen.width > 768 ? 60 : 100}`}
          className="video-carousel center"
          interval={3000}
        >
          {PropertySlider}
        </Carousel>
      ) : (
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
          centerSlidePercentage={`${window.screen.width > 768 ? 60 : 100}`}
          className="video-carousel center"
          interval={3000}
        >
          {languageSlider}
        </Carousel>
      )}
    </div>
  );
}

export default VideoSlider;
