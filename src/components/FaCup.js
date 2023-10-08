import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './FaCup.css'
const FaCup = () => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return (
    <div className="facup" data-aos="zoom-in">
    <div className="fa-left">
        <div className="fa-card bg"></div>
        <div className="fa-card">
        <img
            src="https://i.guim.co.uk/img/media/5a5eb8907441ff43bb02edf6953877c2cc4806ba/0_256_5144_3088/master/5144.jpg?width=620&dpr=2&s=none"
            alt=""
            className="fa-img"
        />
        </div>
    </div>
    <div className="fa-right">
        <h1 className="fa-title">FA CUP</h1>
        <p className="fa-sub">
        Battle of the Manchester
        </p>
        <p className="fa-desc">
            In a historic clash of Manchester football giants, Manchester City emerged victorious in a thrilling FA Cup final against their arch-rivals, 
            Manchester United, at the iconic Wembley Stadium. The atmosphere was electric as thousands of passionate fans filled the stadium, creating an intense and vibrant ambiance.
        </p>
    </div>
    </div>
    );
}

export default FaCup;