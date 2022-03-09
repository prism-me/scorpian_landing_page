import React from "react";
import { connect } from "react-redux";
import "./Promo2.scss";
import serviceBuhenLogo from "../../assets/Images/logo/ServicesWeProvide Logo.png";
import firstService from "../../assets/Images/LandingPage/ServicesWeProvideSection/Interior-Design.jpg";
import secondService from "../../assets/Images/LandingPage/ServicesWeProvideSection/Exterior-Design.jpg";
import thirdService from "../../assets/Images/LandingPage/Fit-outs.jpg";
import fourthService from "../../assets/Images/LandingPage/ServicesWeProvideSection/Landscape-Design.jpg";
import fifthService from "../../assets/Images/LandingPage/ServicesWeProvideSection/Engineering-Consultancy.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Hidden from '@material-ui/core/Hidden';
import PopupForm from "../popup/PopupForm.js";

class PromoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  scrollTop() {
    window.scrollTo(0, 0)
  }

  handleShow = () => {

    this.setState({ show: true });

  };
  handleClose = () => {

    this.setState({ show: false });

  };

  render() {
    return (
      <React.Fragment>
        <section
          className={
            "promo-section" +
            (this.props.removeTopMargin ? "" : "")
          }
        >
          <img src={serviceBuhenLogo} className="serviceBuhenLogo" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div
                  className={`section-heading mb-5 ${this.props.activeLanguage === "arabic"
                    ? "promo-arabic-text"
                    : "english"
                    }
                    buhen-section-heading`}
                >
                  <h3 className="h5 mb-6 promo2-heading">
                    Services we provide
                  </h3>
                  <p className="promo2-description">As we mentioned we do it all from start to end all under one roof.</p>
                </div>
              </div>
            </div>
            <Tabs id="service_tabs">
              <TabList>
                <Tab>Interior Design</Tab>
                <Tab>Exterior Design</Tab>
                <Tab>Fit-out Work</Tab>
                <Tab>Landscape Design</Tab>
                <Tab>Architectural Consultancy</Tab>
              </TabList>

              <TabPanel>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-xs-12">
                    <div>
                      <h4 className="service-title">Interior Design</h4>
                      <p>At Buhen studio, we strive to make all your dreams come true and deliver a “unique” design for each client. We ensure that the design reflectstheir needs, practicality, functionality, feasibility, and above all “Art” in design.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div
                      className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                        ? "arabic-text"
                        : "english"
                        }
                    buhin-card`}
                    >
                      <img src={firstService} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-xs-12">
                    <div>
                      <h4 className="service-title">Exterior Design</h4>
                      <p>When the “Artificial Intelligence” meets experience we exceed the expectations and deliver a state of Art Facades with the highest durability and least maintenance cost.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div
                      className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                        ? "arabic-text"
                        : "english"
                        }
                    buhin-card`}
                    >
                      <img src={secondService} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-xs-12">
                    <div>
                      <h4 className="service-title">Fit-out Work</h4>
                      <p>We can call ourselves one of the leaders in this field as we are one of the few who design and execute all the activities in house. We have a power of 70 talented technicians from all over the world that cover all the Fit out aspects from plaster, MEP works, smart homes, paint, Joinery, gypsum and etc…</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div
                      className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                        ? "arabic-text"
                        : "english"
                        }
                    buhin-card`}
                    >
                      <img src={thirdService} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-xs-12">
                    <div>
                      <h4 className="service-title">Landscape Design</h4>
                      <p>Artificial or natural, pools and waterfalls, grass or pavers, sunken seating or glass houses, what ever you dream of, we will make it real.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-xs-12">
                    <div
                      className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                        ? "arabic-text"
                        : "english"
                        }
                    buhin-card`}
                    >
                      <img src={fourthService} />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-xs-12">
                    <div>
                      <h4 className="service-title">Engineering Consultancy</h4>
                      <p>We are proud to ask you kindly check our projects portfolio in Dubai Municipality and Abu Dhabi Municipality which speaks better about our talent and experience in this very specific field. </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4  col-xs-12">
                    <div
                      className={`card single-promo-card single-promo-hover promo2-card-style  ${this.props.activeLanguage === "arabic"
                        ? "arabic-text"
                        : "english"
                        }
                    buhin-card`}
                    >
                      <img src={fifthService} />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <div className="view_more_div">
              <a
                href="#top-banner-form"
                class="button btn solid-btn english header_cta"
                onClick={this.handleShow}
                id="view-more">BOOK YOUR CONSULTATION</a>
              <Hidden mdUp>
                <PopupForm

                  show={this.state.show}

                  onHide={this.handleClose}

                />
              </Hidden>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({
  state,
}))(PromoSection);
