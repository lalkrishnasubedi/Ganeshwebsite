import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa";
import { useState } from "react"
 


const Navbar = () => {
    
    const [Click, setClick] = useState(false);
    const handleClick=()=>{setClick(true)};
    

    
  return (
    <div className="header">
        <Link to="/">
            <h1>Ganesh</h1>

        </Link>
        <ul className={Click ? "nav-menu active": "nav-menu"}>
            <li>
                <Link to ="/">Home </Link>
               
            </li>
            <li>
                <Link to ="/project">Project </Link>
               
            </li>
            <li>
                <Link to ="/about">About </Link>
               
            </li>
            <li>
                <Link to ="/contact">Contact </Link>
               
            </li>
        </ul>
        <div className="hamburger" onclick={()=>handleClick()}>
            {Click ? (<FaBars size={20} style={{color: "white"}}/>): (<FaTimes size={20} style={{color: "white"}}/>)}


        </div>

      
    </div>
  )
}

export default Navbar
