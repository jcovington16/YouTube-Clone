import React, {useState, useEffect} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import axios from 'axios';

const Header = ({setVideoID}) => {
    const [videoSearch, setVideoSearch] = useState("");

    const search = (e) => {
        e.preventDefault();
        setVideoSearch(e.target[0].value)
    }

    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoSearch}&key=AIzaSyC3jrvFog9puI6wwHBq9L4NGDK2n1pgpjA`)
            .then(res => {setVideoID(res.data["items"][0].id.videoId)}      
    )},[videoSearch, setVideoID])
    
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
                <form onSubmit={(e) => search(e)} className="header__form">
                    <input type="text" placeholder="Search" name="input"/>
                    <button type="submit" ><SearchIcon className="header__inputButton"/></button>
                </form>
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
