import React, { useState } from 'react';
import "./Header.css";
import LogoIcon from "./icon-logo.svg"

const Header = () => {
    const [date] = useState(new Date())
    return(
        <header>
            <div className="header">
                <div className="container">
                    <div className="navigate">
                        <div className="navigate-content">
                            <div className="navigate-logo">
                                <img src={LogoIcon} alt="App-logo"/>
                                <span className="logo-text">Cov9teen</span>
                            </div>
                            <ul className="navigate-link">
                                <li><a href="#Home">Home</a></li>
                                <li><a href="#Home">Symptoms</a></li>
                                <li><a href="#Home">Protection</a></li>
                            </ul>
                        </div>
                        <div className="set-date">
                            Update: {date.toDateString()}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;