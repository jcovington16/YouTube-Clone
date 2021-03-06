import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './RecommendedVideos.css';

function RecommendedVideos({video, update}) {

    const [videos, setVideos] = useState([]);

    const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&maxResults=8&key=AIzaSyC3jrvFog9puI6wwHBq9L4NGDK2n1pgpjA.&part=snippet`

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
                            <a href="true" onClick={()=> update(info.id.videoId)} ><img src={info.snippet.thumbnails.medium.url } alt=""></img></a>
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
