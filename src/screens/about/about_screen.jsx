import React from 'react'
import {Link} from 'react-router-dom';
import './about_style.css';

const About = () => {
    return (
        <>
        <Link className="nav-top" to="/projects">Project</Link>
          <div className="about">
            <div className="about-img">
            <img src="/assets/com.jpg" alt="" />
            </div>
         <div className="about-main">
            
         </div>
        </div>
        <Link className="nav-bottom" to="/me">About Me</Link>
        </>
    )
}

export default About
