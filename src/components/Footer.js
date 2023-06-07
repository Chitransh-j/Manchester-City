import "./FooterStyles.css"
import React from 'react'
import {FaHome,FaPhone,FaMailBulk} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <p>City of Manchester Stadium.</p>
                    <p>Manchester.</p>
                </div>

                <div className="phone">
                    <FaPhone size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <h4>12-123-212</h4>
                </div>
                <div className="email">
                    <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}}/>
                    <h4>mancity@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About the Club:
                </h4>
                <p>This is Manchester City. A prestigious Football club which was established in 1894.
                   We have won 9 Premier Leagues, 7 FA cups, 6 Community Shields and 8 EFL Cups.  
                </p>
                <div className="social">

                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer