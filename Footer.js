import "./Footer.css";
import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"white", marginRight: "2rem"}}/>
                    <div>
                        <p>123 House Society.</p>
                        <p>Pokhara</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"white", marginRight: "2rem"}}/>
                123456789</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"white", marginRight: "2rem"}}/>
                ganeshsubedi100@gmail.com</h4>
                
                </div>
            </div>
            <div className="right">
                <h4>About Ganesh Subedi Biography</h4>
                <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies</p>
                <div className="social">
                    <Link to="https://www.facebook.com/photo/?fbid=1939645422886524&set=a.292159990968417&__cft__[0]=AZX-W34GvHNJn8VoRwR0ZgaRjVPB1JmKzmaxegQX8DRkZ0o5H774zBdVQUNy5MCRqu3YdNQaY3JP760FM_4lkd6SabAwULA3zqE5RHytA_eGLVLIJXZ1wXsIJJXVEPYvYmUcoFzdalGwqvf41phgu6c2RAjAammVhEL8Jf2kxpO8dg&__tn__=~H-R">
                <FaFacebook size={20} style={{color:"white", marginRight: "1rem"}}/>
                </Link>
                <Link to="https://www.youtube.com/watch?v=-G43PbpmGrA"/>
                <FaTwitter size={20} style={{color:"white", marginRight: "1rem"}}/>
                
                <FaLinkedin  size={20} style={{color:"white", marginRight: "1rem"}}/>
               
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
