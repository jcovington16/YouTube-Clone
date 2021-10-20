import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Videos.css';

const Videos = () => {

    const [videos, setVideos] = useState([]);

//    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=computers&key=${"apiKey"}`;


    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=Javascript&key=AIzaSyBPapo9wPpHZ35JdexyFu2v2mwKJcM3BfE`)
            .then(response => setVideos(response.data["items"]["id"]["videoId"])
        )}, [videos]);

    return (
        <div className="videos">
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0"
        frameborder="0"></iframe>
        </div>
        
    )
}

export default Videos
