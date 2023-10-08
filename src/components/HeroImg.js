import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpeg";
import {Link} from "react-router-dom" ;
import Typewriter from 'typewriter-effect';

const HeroImg = () => {

  return (<div className="hero">
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="city-pl"/>
    </div>
    <div className="content">
        <p>THIS IS MANCHESTER CITY</p>
        <span>
        <h1>
          <Typewriter 
            options={{
            strings: ['Champions League Winners.', 'Premier League Winners.','FA Cup Winners.'],
            autoStart: true,
            loop: true,
            deleteSpeed: 40,
          
      }}
      />
        </h1>
        </span>
    <div>
        <Link to="/premier" className="btn">PL 2022-23</Link>
        <Link to="/contact" className="btn btn-light ">Contact</Link>
    </div>
    </div>
    
    </div>

  )
}

export default HeroImg