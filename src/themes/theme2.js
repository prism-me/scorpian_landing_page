import React, { useState } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection2";
import FooterSection from "../components/Footer";
import BuraqSlider from "../components/BuraqSlider";
import AboutBuraq from "../components/AboutBuraq";
import WhyChooseUs from "../components/WhyChooseUs/whyChooseUs";
import OurTeam from "../components/OurTeam/OurTeam";
import Contact from "../components/Contact/contact";
import { tabsData } from "../data/tabsdata";
import Events from "../components/Events/events";

const Theme = () => {
  const [tabData, setTabData] = useState(tabsData);
  const [activeTabData, setActiveTabData] = useState(tabsData[0]);

  const onChangeTab = (tabtext) => {
    tabsData.forEach((item) => {
      if (item.tab === tabtext) {
        setActiveTabData(item);
      }
    });
  };

  return (
    <React.Fragment>
      <Header lan={window.location.pathname} />
      <div className="main">
        <HeroSection lan={window.location.pathname} />

        <AboutBuraq
          lan={window.location.pathname}
          onChangeTab={onChangeTab}
          data={activeTabData}
        />

        <BuraqSlider lan={window.location.pathname} data={activeTabData} />

        <OurTeam lan={window.location.pathname} data={activeTabData} />

        <WhyChooseUs lan={window.location.pathname} />

        <Contact lan={window.location.pathname} />
        <Events lan={window.location.pathname} />
      </div>
      <FooterSection lan={window.location.pathname} />
      {/* <BottomTabNavigator /> */}
    </React.Fragment>
  );
};

export default Theme;
