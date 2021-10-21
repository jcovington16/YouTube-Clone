import React, {useState, useEffect} from 'react';
//import axios from 'axios';

const Comments = (props) => {

//    const url = "http://localhost:50001/api/comment/"
//    const [comments, setComments] = useState("");

    // useEffect(() => {
    //     axios.get(url)
    // })

    return (
        <div>
            <h2>Comments</h2>
            <form action="">
               <textarea style={{width: '100%', borderRadius: '5px'}}name="" placeholder="write some comments"></textarea>
            </form>  
        </div>
    )
}

export default Comments;