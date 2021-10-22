import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Replies from './Reply';

const Comments = (props) => {

   const url = "http://localhost:5001/api/comment/";
   const [comments, setComments] = useState([]);
   const [text, setText] = useState('');
   const [comment_id, setComment_id] = useState('');

    useEffect(()=> {
            axios.get(`http://localhost:5001/api/comment/${props.id}`)
            .then(res => {setComment_id(res.data["_id"])})
            axios.get(`http://localhost:5001/api/comment/${props.id}`)
            .then(res=> {setComments(res.data["text"])})
        })    

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =(event)=>{
        event.preventDefault();
        const newComment={
            text: text,
            videoID: props.id
        }
    
        addNewComment(newComment);
        setText('');
    }

    const addNewComment = (newComment) => {
        axios.post(`http://localhost:5001/api/comment/`, newComment)   
      }

    return (
        <div>
            <h2>Comments</h2>
            <ul><li>{comments}</li></ul>
            <form action="">
               <textarea style={{width: '100%', borderRadius: '5px'}}name="" placeholder="write some comments"onChange={(event)=>handleChange(event)}></textarea>
               <div className="replyButton">
                <button onClick={handleClick}>Submit comment</button>
                </div>
                <Replies id={comment_id} />
            </form>  

        </div>
    )
}

export default Comments;