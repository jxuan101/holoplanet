import { React, useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaBroadcastTower, FaCog } from 'react-icons/fa';

export default function Navbar() {
    const [homeActive, setHomeActive] = useState(true);
    const [videosActive, setVideosActive] = useState(false);
    const [liveActive, setLiveActive] = useState(false);
    const [settingsActive, setSettingsActive] = useState(false);

    const changeActive = (active) => {
        if (active === 'home') {
            setHomeActive (true);
            setVideosActive (false);
            setLiveActive (false);
            setSettingsActive (false);
        }
        else if (active === 'videos') {
            setHomeActive (false);
            setVideosActive (true);
            setLiveActive (false);
            setSettingsActive (false);
        }
        else if (active === 'live') {
            setHomeActive (false);
            setVideosActive (false);
            setLiveActive (true);
            setSettingsActive (false);
        }
        else {
            setHomeActive (false);
            setVideosActive (false);
            setLiveActive (false);
            setSettingsActive (true);
        }
        return;
    }

    return (
        <nav className = 'navbar' >
            <Link to = '/' className = 'navlink' onClick = {() => changeActive('home') }>
                { 
                    homeActive ? 
                    <div>
                        <FaHome className = 'navicon'/> 
                    </div>
                    : 
                    <div>
                    {'Home'}
                    </div> 
                }
            </Link>
            <Link to = '/videos' className = 'navlink' onClick = {() => changeActive('videos') }> 
                { 
                    videosActive ? 
                    <div>
                        <FaFilm className = 'navicon'/> 
                    </div>
                    :
                    <div>
                    {'Videos'}
                    </div>  
                }
            </Link>
            <Link to = '/live' className = 'navlink' onClick = {() => changeActive('live') }>
                {
                    liveActive ? 
                    <div>
                        <FaBroadcastTower className = 'navicon'/> 
                    </div>
                    :
                    <div>
                    {'Live'}
                    </div> 
                }
            </Link>
            <Link to = '/settings' className = 'navlink' onClick = {() => changeActive('settings') }>
                {
                    settingsActive ? 
                    <div>
                        <FaCog className = 'navicon'/> 
                    </div>
                    :
                    <div>
                    {'Settings'}
                    </div> 
                }
            </Link>
        </nav>
    )
}