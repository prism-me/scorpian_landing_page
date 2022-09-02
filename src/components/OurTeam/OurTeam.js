import React from "react";
import "./OurTeam.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const OurTeam = ({ data, lan }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  };

  const englishSlider = data?.data?.en?.amenities?.amenitiesData;
  const gujratiSlider = data?.data?.gu?.amenities?.amenitiesData;

  let languageSlider;

  if (lan == "/" || lan == "/en") {
    languageSlider = englishSlider.map((x, i) => {
      return (
        <div className="item" key={i}>
          <div className="image-wraper">
            <img src={x?.img} className="img-fluid" alt="Imageteam" />
            <p>{x?.name} </p>
          </div>
        </div>
      );
    });
  } else if (lan == "/gu") {
    languageSlider = gujratiSlider.map((x, i) => {
      return (
        <div className="item" key={i}>
          <div className="image-wraper">
            <img src={x?.img} className="img-fluid" alt="Imageteam" />
            <p>{x?.name} </p>
          </div>
        </div>
      );
    });
  } else {
    languageSlider = englishSlider.map((x, i) => {
      return (
        <div className="item" key={i}>
          <div className="image-wraper">
            <img src={x?.img} className="img-fluid" alt="Imageteam" />
            <p>{x?.name} </p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="our-team container" id="our-team">
      {lan == "/" || lan == "/en" ? (
        <h3 className="rozella-heading">{data?.data.en.amenities.header}</h3>
      ) : lan == "/gu" ? (
        <h3 className="rozella-heading">{data?.data.gu.amenities.header}</h3>
      ) : (
        <h3 className="rozella-heading">{data?.data.en.amenities.header}</h3>
      )}
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={false}
        arrows={true}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        draggable={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        itemClass="listStyle"
      >
        {languageSlider}
      </Carousel>
    </div>
  );
};
export default OurTeam;
