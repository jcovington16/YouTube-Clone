import React, {useState, useEffect} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import axios from 'axios';


const Header = () => {
    const [videoSearch, setVideoSearch] = useState("");
    const [videoID, setVideosID] = useState("");

    const search = (e) => {
        e.preventDefault();
        setVideoSearch(e.target[0].value)
        console.log(videoSearch)
    }

    // useEffect(() => {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoSearch}&key=AIzaSyChw-LvG3XsPlMckbRLiROyagMdZ9bCYeo`)
    //         .then(res => {
    //             setVideosID(res.data["items"][0].id.videoId)
    //             console.log(res.data["items"][0].id.videoId)
    //         } 
    // )}, [videoID, videoSearch]);

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
                <form onSubmit={(e) => search(e)}>
                    <input type="text" placeholder="Search" name="input" value={videoSearch} onChange={(e) => setVideoSearch(e.target.value)}/>
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
