import React, { useState, useRef } from 'react'
import './project_style.css';
import {Link} from 'react-router-dom';
import projects from '../../data/data';

const Project = () => {
    const[selected, setSelected] = useState(2);
    const scrollRef = useRef(null);
    return (
        <>
        <Link className="nav-top" to="/">Home</Link>
        <div className="project-wrapper">
            <div className="project">
                <i className="fa fa-arrow-up scroll-icon scroll-icon-top" onClick={() => scrollRef.current.scrollBy(0, -300)}></i>
                    <div className="project-slider" ref={scrollRef}>
                        {
                            projects.map((item, index) => {
                                return <div className={selected == index ? "project-img active" : "project-img"} onClick={() => setSelected(index)}>
                                    <img src={item.img} alt={item.name} />
                                </div>
                            })
                        }   
                    </div>
                <i className="fa fa-arrow-down scroll-icon scroll-icon-bottom" onClick={() => scrollRef.current.scrollBy(0, 300)}></i>
                <div className="project-main">
                    <div className="project-main-img">
                        <img src={projects[selected].img} alt={projects[selected].name} />
                    </div>
                    <div className="project-details">
                        <h3>{projects[selected].name}</h3>
                        <p>{projects[selected].description}</p>
                        <p>{projects[selected].description}</p>
                    </div>
                </div>
            </div>
        </div>
        <Link className="nav-bottom" to="/me">Profile</Link>
        </>
    )
}

export default Project
