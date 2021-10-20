import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Videos.css';

const Videos = () => {

    const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?q=espn&key=AIzaSyChw-LvG3XsPlMckbRLiROyagMdZ9bCYeo`)
    //         .then(response => setVideos(response.data["items"][0].videoID)
    //     )}, [videos]);

    return (
        <div className="videos">
            <h2>Recommended</h2>

            <iframe title="Video" id="ytplayer" type="text/hmtl" width="640" height="360" src="https://www.youtube.com/embed/wCl9kvQGHPI?autoplay=0" frameBorder="0"></iframe>

        </div>
    )
}

export default Videos
