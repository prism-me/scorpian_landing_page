import React from "react";
import "./OurTeam.scss";

const OurTeam = ({ data, lan }) => {
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
      <div className="owl-carousel owl-theme amenities-carousel arrow-indicator">
        {languageSlider}
      </div>
    </div>
  );
};
export default OurTeam;
