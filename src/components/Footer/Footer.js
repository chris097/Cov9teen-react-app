import React from 'react';
import "./Footer.css"
import LogoIcon from "./icon-logo.svg";
import GithubIcon from "./github-icon.svg";
import TwitterIcon from "./twitter-icon.svg";
import DeveloperIcon from "./laptop.svg";

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={LogoIcon} alt=""/>
                    <span className="footer-logo-text">Cov9teen</span>
                </div>
                <div className="footer-container">
                    <div className="footer-source">
                        <h2>Source</h2>
                        <p>
                        The infos on this this webpage were crawled from WHO,
                        images were downloaded from Pixaybay and Pexels, Icons
                        were downloaded from Iconfinder and Flaticons.
                        </p>
                    </div>
                    <div className="footer-useful-links">
                        <div className="useful-link-content">
                            <h2>Useful Links</h2>
                            <div>
                                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">WHO Information</a>
                            </div>
                            <div>
                                <a href="https://en.wikipedia.org/wiki/Coronavirus_disease_2019">Covid-19 wikipedia</a>
                            </div>
                            <div>
                                <a href="https://www.worldometers.info/coronavirus/">World Information on Covid-19</a>
                            </div>
                        </div>
                    </div>
                    <div className="emergency-num">
                        <h2>Emergency Numbers to call</h2>
                        <p>
                        0908474646464
                        0908474646464
                        </p>
                    </div>
                </div>
                <div className="developer">
                    <p>Built by 
                         OkeyHacker.inc
                        <span className="coder"><img src={DeveloperIcon} alt="developer"/></span>
                    </p>
                    <div className="developer-link">
                        <a href="https://twitter.com/ChrisFidel7">
                            <img src={TwitterIcon} alt=""/>
                        </a>
                        <a href="https://github.com/chris097/Cov9teen-react-app">
                            <img src={GithubIcon} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;