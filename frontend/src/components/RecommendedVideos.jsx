import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './RecommendedVideos.css';

function RecommendedVideos(props) {

    const [videos, setVideos] = useState([])

    const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.video}&type=video&key=AIzaSyB8wMttZxBfr5FkkxdmXA9LFFVerMSiN3Q.&part=snippet`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
            })
    })

    return (
        <div className="recommend">
            <h2>Recommened Videos</h2>

            <div className="videos">

            </div>
            
        </div>
    )
}

export default RecommendedVideos
