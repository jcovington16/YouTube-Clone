import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Replies = (props) => {

   const [reply, setReply] = useState([]);
   const [text, setText] = useState('');


    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =(event)=>{
        event.preventDefault();
        const newReply={
            text: text,
        }
    
        addNewComment(newReply);
        setText('');
    }

    const addNewComment = (newReply) => {
        axios.post(`http://localhost:5001/api/comment/reply/${props.id}`, newReply)   
      }

    return (
        <div>
            <h2>reply</h2>
            <ul>{reply}</ul>
            <form action="">
               <textarea style={{width: '100%', borderRadius: '5px'}}name="" placeholder="write some comments"onChange={(event)=>handleChange(event)}></textarea>
               <div className="replyButton">
                <button onClick={handleClick}>Submit reply</button>
                </div>
            </form>  

        </div>
    )
}

export default Replies;




