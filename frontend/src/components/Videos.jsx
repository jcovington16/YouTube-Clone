import React from 'react';
import './Videos.css';
import Comments from './Comments';
//import axios from 'axios';

const Videos = (props) => {

    const url = "https://www.youtube.com/embed/"

    // const info = () => {
    //     axios.get(`https://www.googleapis.com/youtube/v3/vidoes?part=snippet?id=${props.video}&key=AIzaSyB8wMttZxBfr5FkkxdmXA9LFFVerMSiN3Q`)
    //         .then(res => {console.log(res.data)})
    // }
    // info()

    return (
        <div>
            <div className="videos">
                <h2>Playing</h2>

                <iframe title="Video" id="ytplayer" type="text/hmtl" width="550" height="360" 
                src={`${url}${props.video}?autoplay=0`} frameBorder="0"></iframe>
            </div>

            <div className="info">

            </div>

            <div className="comments">
                <Comments />
            </div>
        </div>
    )
}

export default Videos
