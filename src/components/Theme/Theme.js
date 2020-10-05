import React from "react";
import "./Theme.css";
import ThemeIcon from "./circle.svg";
import ThemeIcons from "./icon-abs-1.svg"

const Theme = () =>{
    return(
      <div className="background-design">
        <div className="circle-red">
          <img src={ThemeIcon} alt=""/>
        </div>
        <div className="circle-blue">
          <img src={ThemeIcons} alt=""/>
        </div>
      </div>
    )
  }
  

  export default Theme;