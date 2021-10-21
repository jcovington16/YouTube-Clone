import React from 'react';
import './Videos.css';

const Videos = (props) => {

    const url = "https://www.youtube.com/embed/"

    return (
        <div>
            <div className="videos">
                <h2>Recommended</h2>

                <iframe title="Video" id="ytplayer" type="text/hmtl" width="600" height="360" 
                src={`${url}${props.video}?autoplay=0`} frameBorder="0"></iframe>
            </div>

            <div>

            </div>

            <div>

            </div>
        </div>
    )
}

export default Videos
