import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Videos.css';

const Videos = () => {

    const [videos, setVideos] = useState([]);

//    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=computers&key=${"apiKey"}`;


    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?q= &key=`)
            .then(response => setVideos(response.data["items"])
        )}, [videos]);

    return (
        <div className="videos">
            <h2>Recommended</h2>
        </div>
    )
}

export default Videos
