import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './RecommendedVideos.css';

function RecommendedVideos(props) {

    const [videos, setVideos] = useState([]);

    const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.video}&type=video&maxResults=8&key=AIzaSyB9dQqvwZHYf3vmd7IMEq7J6UdvPkejwqQ.&part=snippet`

    useEffect(() => {
        axios.get(url)
            .then(res => {setVideos(res.data["items"])});

    }, [url])

    return (
        <div className="recommend">
            <h2>Recommended Videos</h2>

            <div className="videos">
                <ul>
                {videos.map((info) => {
                    return (
                        <li className="music_list" key={info.id.videoId}>{info.snippet && 
                        <div>
                            <a href={url}><img src={info.snippet.thumbnails.medium.url } alt=""></img></a>
                            <h4>{info.snippet.channelTitle}</h4>
                            <p>{info.snippet.description.substr(0,40)}</p>
                        </div>
                        }
                        </li>
                    )
                })}
                </ul>
            </div>
            
        </div>
    )
}

export default RecommendedVideos
