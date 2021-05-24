import { React, useState, useRef } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaBroadcastTower, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

export default function Navbar() {
    const [clicked, setClicked] = useState(true);
    const [showBar, setShowBar] = useState(true);

    const nodeRef = useRef(null);

    return (
        <div className = 'navbar-container'>
            {!clicked &&
                <div className = 'open-nav-button' onClick = {() => setShowBar(true)}>
                    <FaBars className = 'open-nav-icon' />
                </div>
            }
            <CSSTransition
                in = { showBar }
                classNames = "navslide" 
                timeout = { 300 }
                nodeRef = { nodeRef }
                unmountOnExit
                onEnter = {() => setClicked(true)}
                onExited = {() => setClicked(false)}
            >
                <div ref = { nodeRef } className = 'navbar-active'>
                    <nav className = 'navbar' >
                        <Link to = '/' className = 'navlink' >
                            <FaHome className = 'navlink-icon' />
                        </Link>
                        <Link to = '/videos' className = 'navlink' > 
                            <FaFilm className = 'navlink-icon' />
                        </Link>
                        <Link to = '/live' className = 'navlink' >
                            <FaBroadcastTower className = 'navlink-icon' />
                        </Link>
                        <Link to = '/settings' className = 'navlink' >
                            <FaCog className = 'navlink-icon' />
                        </Link>
                    </nav>
                    <div className = 'close-nav-button' onClick = {() => setShowBar(false)}>
                        <FaTimes className = 'close-nav-icon' />
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}