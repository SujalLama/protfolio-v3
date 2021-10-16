import React from 'react'
import './header_style.css';
import {Link, useLocation} from 'react-router-dom';

const Header = () => {
    const {pathname} = useLocation();
    return (
       <header>
           <ul className="nav-list">
               <li><Link to="/" className={pathname === '/' ? "nav-item active" : "nav-item"}>Home</Link></li>
               <li><Link to="/projects" className={pathname === '/projects' ? "nav-item active" : "nav-item"}>Projects</Link></li>
               <li><Link to="/me" className={pathname === '/me' ? "nav-item active" : "nav-item"}>About Me</Link></li>
           </ul>
       </header>
    )
}

export default Header
