import { React, useState, useRef } from 'react';
import './index.css';
import { FaTimes, FaCrown } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

export default function Idolbar() {
    // Bar is rendered on arrival.
    const [clicked, setClicked] = useState(true);
    const [showBar, setShowBar] = useState(true);

    const nodeRef = useRef(null);

    return (
        <div className = 'idolbar-container'>
            {/* Show open idol bar button. */}
            {!clicked && 
                <div className = 'menu-icon-button' onClick = {() => setShowBar(true)}>
                    <FaCrown className = 'menu-icon' />
                </div>
            }
            {/* Show Idol bar when button is pressed. */}
            <CSSTransition
                in = { showBar }
                classNames = "slide" 
                timeout = { 300 }
                nodeRef = { nodeRef }
                unmountOnExit
                onEnter = {() => setClicked(true)}
                onExited = {() => setClicked(false)}
            >
                <div ref = { nodeRef } className = 'idolbar-active'>
                    {/* Close idol bar button. */}
                    <div className = 'close-menu-icon-button' onClick = {() => setShowBar(false)}>
                        <FaTimes className = 'close-menu-icon' />
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}