import React from 'react';
import "./Prevention.css"
import MaskMan from "./mask-man 1.svg";
import FaceMask from "./face-mask.svg";
import Headache from "./headachea.svg";
import HandShake from "./handshake.svg";
import KeepDist from "./keep_dist.svg";
import Home from "./home.svg";

const Prevention = () => {
    return (
        <>
        <div className="container" id="prevention">
            <div className="cov19-sectionD">
                <div className="sectionD-prevention">
                    <div className="prevention-image">
                        <img src={MaskMan} alt=""/>
                    </div>
                    <div className="prevention-text">
                        <h1>
                        How can I protect myself from Covid-19?
                        </h1>
                        <p>
                        Coronavirus disease spreads primarily through contact with
                        an infected person when they cough or sneeze. It also spreads
                        when a person touches a surface or object that has the virus
                        on it, then touches their eyes, nose, or mouth.
                        </p>
                        <div className="prevention-tips">
                            <p>Whats should <span>I do?</span></p>
                            <div className="prevention-card">
                                <div className="prevention-container">
                                    <div className="facemask">
                                        <img src={FaceMask} alt=""/>
                                        <p>Wear a facemask</p>
                                    </div>
                                </div>
                                <div className="prevention-container">
                                    <div className="headache">
                                        <img src={Headache} alt=""/>
                                        <p>Don't touch your face</p>
                                    </div>
                                </div>
                                <div className="prevention-container">
                                    <div className="aviod-contact">
                                        <img src={HandShake} alt=""/>
                                        <p>Avoid hand contact</p>
                                    </div>
                                </div>
                            </div>
                            <div className="prevention-card-1">
                                <div className="prevention-container">
                                    <div className="keep-dist">
                                        <img src={KeepDist} alt=""/>
                                        <p>Keep safe distance</p>
                                    </div>
                                </div>
                                <div className="prevention-container">
                                    <div className="stay-home">
                                        <img src={Home} alt=""/>
                                        <p>Stay at home if you can</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Prevention;