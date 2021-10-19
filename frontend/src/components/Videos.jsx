import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Videos = () => {

    const [videos, setVideos] = useState([]);

    const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];

    const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${getSearchTerm()}&key=${"apiKey"}`;

    useEffect(() => {
        axios.get(url)
            .then(response => setVideos(response.data))
    })

    return (
        <div>
 
        </div>
    )
}

export default Videos
