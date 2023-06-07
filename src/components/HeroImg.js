import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpeg";
import {Link} from "react-router-dom" ;


const HeroImg = () => {
  return (<div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="city-pl"/>
    </div>
    <div className="content">
        <p>THIS IS MANCHESTER CITY</p>
        <h1>Premier League Champions.</h1>
        <div>
        <Link to="/premier" className="btn">PL 2022-23</Link>
        <Link to="/contact" className="btn btn-light ">Contact</Link>
    </div>
    </div>
    
    </div>

  )
}

export default HeroImg