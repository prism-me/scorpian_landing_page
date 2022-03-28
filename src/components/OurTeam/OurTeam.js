
import React from 'react';
import "./OurTeam.scss";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";

import { language } from "../../data/language.js";

const OurTeam = (props) => {

    return (
        <div className='our-team container'
            id="our-team"
        >
            {
                props.lan == '/' || props.lan == '/en' ?
                    <>
                        <h3 className="rozella-heading">
                            {language.english.ourTeam.header}
                        </h3>
                        <div className='row'>
                            {
                                language.english.ourTeam.teamsData?.map((x, i) => (
                                    <div className='col-md-4'>
                                        <div className="image-wraper">
                                            <img
                                                src={x?.img}
                                                className="img-fluid"
                                                alt="Imageteam"
                                            />
                                            <div className='bottomDivmain'>
                                                <div class="d-flex justify-content-between align-items-center bottomDiv ">
                                                    <h3>{x?.name} </h3>
                                                    <div className="TextOverlayDiv">
                                                        <div className='d-flex justify-content-end align-items-center detailDiv'>
                                                            <a href='tel:+971 45689 536'>
                                                                <FiPhone className='iconSize' />
                                                            </a>
                                                            <a href='mailto:info@rozellarealestate.com'>
                                                                <HiOutlineMail className='iconSize' />
                                                            </a>
                                                            <a href='https://www.linkedin.com/' target='_blank'>
                                                                <RiLinkedinFill className='iconSize' />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </>
                    : props.lan == '/ch' ?
                        <>
                            <h3 className="rozella-heading">
                                {language.chinese.ourTeam.header}
                            </h3>
                            <div className='row'>
                                {
                                    language.chinese.ourTeam.teamsData?.map((x, i) => (
                                        <div className='col-md-4'>
                                            <div className="image-wraper">
                                                <img
                                                    src={x?.img}
                                                    className="img-fluid"
                                                    alt="Imageteam"
                                                />
                                                <div className='bottomDivmain'>
                                                    <div class="d-flex justify-content-between align-items-center bottomDiv ">
                                                        <h3>{x?.name} </h3>
                                                        <div className="TextOverlayDiv">
                                                            <div className='d-flex justify-content-end align-items-center detailDiv'>
                                                                <a href='tel:+971 45689 536'>
                                                                    <FiPhone className='iconSize' />
                                                                </a>
                                                                <a href='mailto:info@rozellarealestate.com'>
                                                                    <HiOutlineMail className='iconSize' />
                                                                </a>
                                                                <a href='https://www.linkedin.com/' target='_blank'>
                                                                    <RiLinkedinFill className='iconSize' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </>
                        : props.lan == '/ar' ?
                            <>
                                <h3 className="rozella-heading">
                                    {language.arabic.ourTeam.header}
                                </h3>
                                <div className='row'>
                                    {
                                        language.arabic.ourTeam.teamsData?.map((x, i) => (
                                            <div className='col-md-4'>
                                                <div className="image-wraper">
                                                    <img
                                                        src={x?.img}
                                                        className="img-fluid"
                                                        alt="Imageteam"
                                                    />
                                                    <div className='bottomDivmain'>
                                                        <div class="d-flex justify-content-between align-items-center bottomDiv ">
                                                            <h3>{x?.name} </h3>
                                                            <div className="TextOverlayDiv">
                                                                <div className='d-flex justify-content-end align-items-center detailDiv'>
                                                                    <a href='tel:+971 45689 536'>
                                                                        <FiPhone className='iconSize' />
                                                                    </a>
                                                                    <a href='mailto:info@rozellarealestate.com'>
                                                                        <HiOutlineMail className='iconSize' />
                                                                    </a>
                                                                    <a href='https://www.linkedin.com/' target='_blank'>
                                                                        <RiLinkedinFill className='iconSize' />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </>
                            :
                            <>
                                <h3 className="rozella-heading">
                                    {language.english.ourTeam.header}
                                </h3>
                                <div className='row'>
                                    {
                                        language.english.ourTeam.teamsData?.map((x, i) => (
                                            <div className='col-md-4'>
                                                <div className="image-wraper">
                                                    <img
                                                        src={x?.img}
                                                        className="img-fluid"
                                                        alt="Imageteam"
                                                    />
                                                    <div className='bottomDivmain'>
                                                        <div class="d-flex justify-content-between align-items-center bottomDiv ">
                                                            <h3>{x?.name} </h3>
                                                            <div className="TextOverlayDiv">
                                                                <div className='d-flex justify-content-end align-items-center detailDiv'>
                                                                    <a href='tel:+971 45689 536'>
                                                                        <FiPhone className='iconSize' />
                                                                    </a>
                                                                    <a href='mailto:info@rozellarealestate.com'>
                                                                        <HiOutlineMail className='iconSize' />
                                                                    </a>
                                                                    <a href='https://www.linkedin.com/' target='_blank'>
                                                                        <RiLinkedinFill className='iconSize' />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </>
            }
        </div>
    )
}
export default OurTeam;

