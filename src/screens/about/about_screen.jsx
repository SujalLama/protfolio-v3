import React from 'react'
import {Link} from 'react-router-dom';
import './about_style.css';

const About = () => {
    return (
        <>
        <Link className="nav-top" to="/projects">Project</Link>
          <div className="about">
            <div className="about-img">
            <img src="/assets/me.jpg" alt="" />
            </div>
         <div className="about-main">
            <p>Hi, I am sujal lama. I am a full-stack developer situated at kathmandu, Nepal.  I have one year of experience as a graphic designer and 1.5 years of coding as  a web and mobile developer.</p>
            <p>Language I know is JavaScript and dart, and frameworks I use  are react, express and flutter.    However, I am not limited to these technologies and willing to learn new ones.</p>
            <p>Coding aside, I enjoy reading, watching  movies, singing and visiting new places.</p>
            <ul className="about-list">
                <li className="about-list-item">lsujal41@gmail.com <span><i className="fa fa-envelope"></i></span></li>
                <li className="about-list-item">live:.cid.5108322433e03ee8 <span><i className="fa fa-skype"></i></span></li>
                <li className="about-list-item">+977 9818575922 <span><i className="fa fa-mobile"></i></span></li>
            </ul>
         </div>
        </div>
        <Link className="nav-bottom active" to="/me">Profile</Link>
        </>
    )
}

export default About
