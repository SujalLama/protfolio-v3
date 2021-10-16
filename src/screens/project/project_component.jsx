import React, { useEffect, useState } from 'react'
import './project_style.css';
import {Link} from 'react-router-dom';

const projects = [
    {
        name: "Project 1",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
    {
        name: "Project 2",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
    {
        name: "Project 3",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
    {
        name: "Project 4",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
    {
        name: "Project 5",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
    {
        name: "Project 6",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
    {
        name: "Project 7",
        description: "ni iajsdf aisd jijiasd fasdfijd asdfjasdfj",
        img: "/assets/com.jpg"
    },
];
const Project = () => {
    const[selected, setSelected] = useState(3);

    return (
        <>
        <Link className="nav-top" to="/">Home</Link>
        <div className="project">
            <div className="project-slider">
         {
             projects.map((item, index) => {
                 return <div className={selected == index ? "project-img active" : "project-img"} onClick={() => setSelected(index)}>
                     <img src={item.img} alt={item.name} />
                 </div>
             })
         }   
         </div>
         <div className="project-main">
             <div className="project-main-img">
                 <img src={projects[selected].img} alt={projects[selected].name} />
             </div>
                 <h3>{projects[selected].name}</h3>
                 <p>{projects[selected].description}</p>
         </div>
        </div>
        <Link className="nav-bottom" to="/me">About Me</Link>
        </>
    )
}

export default Project
