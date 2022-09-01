import React from "react";
import "./OurTeam.scss";

const OurTeam = ({ data, lan }) => {
  {
    console.log("dataTeam", data);
  }
  return (
    <div className="our-team container" id="our-team">
      {lan == "/" || lan == "/en" ? (
        <>
          <h3 className="rozella-heading">
            {data?.data.english.amenities.header}
          </h3>
          <div className="owl-carousel owl-theme amenities-carousel arrow-indicator">
            {data?.data?.english?.amenities?.amenitiesData?.map((x, i) => (
              <div className="item" key={i}>
                <div className="image-wraper">
                  <img src={x?.img} className="img-fluid" alt="Imageteam" />
                  <p>{x?.name} </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : lan == "/ch" ? (
        <>
          <h3 className="rozella-heading">
            {data?.data.chinese.amenities.header}
          </h3>
          <div className="owl-carousel owl-theme amenities-carousel arrow-indicator">
            {data?.data.chinese.amenities.amenitiesData?.map((x, i) => (
              <div className="item" key={i}>
                <div className="image-wraper">
                  <img src={x?.img} className="img-fluid" alt="Imageteam" />
                  <p>{x?.name} </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : lan == "/ar" ? (
        <>
          <h3 className="rozella-heading">
            {data?.data.arabic.amenities.header}
          </h3>
          <div className="owl-carousel owl-theme amenities-carousel arrow-indicator">
            {data?.data.arabic.amenities.amenitiesData?.map((x, i) => (
              <div className="item" key={i}>
                <div className="image-wraper">
                  <img src={x?.img} className="img-fluid" alt="Imageteam" />
                  <p>{x?.name} </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="rozella-heading">
            {data?.data.english.amenities.header}
          </h3>
          <div className="owl-carousel owl-theme amenities-carousel arrow-indicator">
            {data?.data.english.amenities.amenitiesData?.map((x, i) => (
              <div className="item" key={i}>
                <div className="image-wraper">
                  <img src={x?.img} className="img-fluid" alt="Imageteam" />
                  <p>{x?.name} </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default OurTeam;
