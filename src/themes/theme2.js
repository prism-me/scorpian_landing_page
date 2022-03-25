import React, { Component } from "react";

import Header from "../components/Header/header";
import HeroSection from "../components/HeroSection/HeroSection2";
import FooterSection from "../components/Footer";
import BuraqSlider from "../components/BuraqSlider";
import AboutBuraq from "../components/AboutBuraq";
import WhyChooseUs from "../components/WhyChooseUs/whyChooseUs";
import OurTeam from "../components/OurTeam/OurTeam"

class Theme extends Component {
  state = {
    activeLanguage: "english",
  };
  setActiveLanguage = (language) => {
    this.setState({ activeLanguage: language });
  };
  render() {
    return (
      <React.Fragment>
        <Header
          setLanguage={this.setActiveLanguage}
          lan={window.location.pathname}
        // bgColor="white"
        />
        <div className="main">
          <HeroSection
            activeLanguage={this.state.activeLanguage}
            lan={window.location.pathname}
          />

          <AboutBuraq
            activeLanguage={this.state.activeLanguage}
            lan={window.location.pathname}
          />

          <WhyChooseUs
            activeLanguage={this.state.activeLanguage}
            lan={window.location.pathname}
          />

          <BuraqSlider
            activeLanguage={this.state.activeLanguage}
            lan={window.location.pathname}
          />

          <OurTeam
            activeLanguage={this.state.activeLanguage}
            lan={window.location.pathname}
          />

        </div>
        <FooterSection
          activeLanguage={this.state.activeLanguage}
          lan={window.location.pathname}
        />
        {/* <BottomTabNavigator /> */}
      </React.Fragment>
    );
  }
}

export default Theme;
