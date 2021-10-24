import React from 'react';
import './Videos.css';
import Comments from './Comments';

const Videos = (props) => {

    const url = "https://www.youtube.com/embed/"

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

                <Comments id={props.video} />

            </div>
        </div>
    )
}

export default Videos
