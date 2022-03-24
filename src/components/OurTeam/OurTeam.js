
import React from 'react';
import "./OurTeam.scss";

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
                                            <div class="bottom-left">
                                                {x?.name}
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
                                                <div class="bottom-left">
                                                    {x?.name}
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
                                                    <div class="bottom-left">
                                                        {x?.name}
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
                                                    <div class="bottom-left">
                                                        {x?.name}
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

