import"./HeroImage.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg";
import{Link} from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p><strong>HI, I AM A GANESH SUBEDI</strong></p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    
      
    </div>
  )
}

export default HeroImage
