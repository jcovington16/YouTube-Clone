import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Comments = (props)=>{
    const [text, setText] = useState('');
    const [comments, setComments] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =()=>{

        const newComment={
            text: text
        }
        props.addNewComment(newComment);
        setText('');
    }

    const addNewComment = (newComment) => {
        axios
          .post(`http://localhost:5001/api/comment/oFqVvjq6BGM`, newComment)
    
      }

      return(
        <div className="container">
            <div>
                <textarea name="comments" id="" value={text} cols="75" rows="5" placeholder="Enter a comment" onChange={handleChange} ></textarea>
                </div>
                <div className="replyButton">
                <button onClick={handleClick}>Submit comment</button>
            </div>
        </div>
    )
}

export default Comments;