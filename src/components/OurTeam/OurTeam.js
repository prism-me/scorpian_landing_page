
import React, { useEffect, useState } from 'react';
import team1 from "../../assets/Images/LandingPage/Home-Team-Member1.png"
import team2 from "../../assets/Images/LandingPage/Home-Team-Member2.png"
import team3 from "../../assets/Images/LandingPage/Home-Team-Member3.png"
import "./OurTeam.scss";
import { BsEnvelope, BsPhone } from "react-icons/bs";
const OurTeam = (props) => {

    const teamsData = [
        {
            img: team1,
            name: "John Doe",
            designation: "Accusantium qui dolo"
        },
        {
            img: team2,
            name: "Tommy Doe",
            designation: "Accusantium qui dolo"
        },
        {
            img: team3,
            name: "Hash Doe",
            designation: "Accusantium qui dolo"
        }
    ]
    return (
        <div className='our-team container'
            id="our-team"
        >
            <h3 className="rozella-heading">
                OUR TEAM
            </h3>
            <div className='row'>
                {
                    teamsData?.map((x, i) => (
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
        </div>
    )
}
export default OurTeam;

