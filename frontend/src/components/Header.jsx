import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';


function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                    alt="YouTube Logo" 
                />
            </div>

            <div className="header__input">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header__right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
            </div>

        </div>
    )
}

export default Header;
