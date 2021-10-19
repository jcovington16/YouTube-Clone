import React, {useState, useEffect} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import axios from 'axios';


const Header = () => {

    const url = `https://www.googleapis.com/youtube/v3/search?q=&key=`
    const [videoSearch, setVideoSearch] = useState("");
    const [videoID, setVideosID] = useState("");

    useEffect(() => {
        axios.get(url)
            .then(response => setVideoSearch(response.data)
        )}, [videoSearch])
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
                <input type="text" placeholder="Search"/>
                <SearchIcon className="header__inputButton" type="submit"/>
            </div>

            <div className="header__right">
                <VideoCallIcon className="header__icon"/>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
            </div>

        </div>
    )
}

export default Header;
