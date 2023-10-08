import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './CL.css'

const CL = () => {

    useEffect(()=>{
        AOS.init({duration:2000});
    },[])

    return (
    <div className="a" data-aos="zoom-in">
    <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img
            src="https://phantom-marca.unidadeditorial.es/48c543695597078888bc3220a48d4a87/crop/0x0/827x551/resize/828/f/webp/assets/multimedia/imagenes/2023/06/11/16865170571453.png"
            alt=""
            className="a-img"
        />
        </div>
    </div>
    <div className="a-right">
        <h1 className="a-title">Champions League</h1>
        <p className="a-sub">
        Miracle in Istanbul 2.0
        </p>
        <p className="a-desc">
        In a historic and exhilarating match, Manchester City emerged as the new champions of the UEFA Champions League. The final, held at a packed stadium, witnessed a breathtaking
        display of skill, determination, and teamwork as Manchester City secured a memorable victory against their Inter Milan.Manchester City's remarkable journey to claim the prestigious Champions League trophy will be etched in football history,
        and their triumph is sure to be celebrated for years to come.
        </p>
    </div>
    </div>
    );
  };
  
  export default CL;