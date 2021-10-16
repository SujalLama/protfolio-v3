import React from 'react'
import "./home_style.css";
import {Link} from 'react-router-dom';

const Home = () => {
    const list1 = ["React", "Node", "Sequelize", "Graphql"];
    const list2 = ["Flutter", "Typescript", "Figma"];
    const list3 = ["Html", "Css", "Scss"];
    return (<>
        <Link className="nav-top active" to="/">Home</Link>
        <div className="home">
        <div className="tagline">
            <h1>Full-Stack Developer</h1>
            <p>Hi, I am Sujal. I love to design and code mobile and web app.</p>
        </div>
        <div className="line"></div>
        <div className="list">
            <div className="list-1">
                {
                    list1.map(item => <h4>{item}</h4>)
                }
            </div>
            <div className="list-2">
                {
                    list2.map(item => <h4>{item}</h4>)
                }
            </div>
            <div className="list-3">
                {
                    list3.map(item => <h4>{item}</h4>)
                }
            </div>
        </div>
        </div>
        <Link className="nav-bottom" to="/projects">Project</Link>
        </>
    )
}

export default Home
