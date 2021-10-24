import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Replies from './Reply';

const Comments = (props) => {

   const [comment, setComments] = useState([]);
   const [text, setText] = useState('');


    useEffect(()=> {
            axios.get(`http://localhost:5001/api/comment/${props.id}`)
            .then(res=> {setComments(res.data)})
        })

    const handleChange = (event) => {
        setText(event.target.value);
      };

    const handleClick =(event)=>{
        event.preventDefault();
        const newComment={
            text: text,
            videoID: `${props.id}`
        }
    
        addNewComment(newComment);
        setText("");
    }

    const addNewComment = (newComment) => {
        axios.post(`http://localhost:5001/api/comment/`, newComment)   
      }

    return (
        <div>
            <h2>Comments</h2>

            <form action="">
                <textarea style={{width: '100%', borderRadius: '5px'}}name="" placeholder="write some comments"onChange={(event)=>handleChange(event)}></textarea>
                <div className="replyButton">
                    <button onClick={(e) => handleClick(e)}>Submit comment</button>
                </div>   
            </form> 

            <div className="">
                <ul>
                {comment.map((a) => {
                    return(
                        <li key={a}>
                            {a.text}
                            <br></br>                           
                            {a.replies && a.replies.map((reply) =>{
                                return(
                                    <li>
                                        {reply.text}
                                    </li>
                                )
                            })}
                            <Replies comment_id = {a._id} />
                        </li>     
                    )
                })}
                </ul>
                
            </div>
        </div>
    )
}

export default Comments;