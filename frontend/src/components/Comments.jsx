import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Replies from './Reply';

const Comments = (props) => {

   const url = "http://localhost:5001/api/comment/"
   const [comment, setComments] = useState([]);

   // Use this to display the replies that are associated with the comments. 
   const [comment_reply, setCommentReply] = useState([]);
   const [text, setText] = useState('');


    useEffect(()=> {
            axios.get(`http://localhost:5001/api/comment/${props.id}`)
            .then(res=> {setComments(res.data)})

            axios.get(``)
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

            <div>
                <ul>
                    {comment.map((info) => {
                        return (
                            <li key={info._id}>
                                <p>{info.text}</p>
                                {/* This will display the reply button and handle submission 
                                Create another component to do a get request. Create the useState
                                variable and function above so you can pass it back into this 
                                component to display the replies. When you reply to a comment just
                                ensure you have the comment id so all of the replies will show
                                don't forget conditional rendering. Great example of that is in the 
                                recommended videos component.*/}
                                <Replies />
                            </li>
                        )
                    })}
                    
                </ul>
            </div> 

            

        </div>
    )
}

export default Comments;