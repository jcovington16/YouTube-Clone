import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Replies = ({comment_id}) => {
    const [text, setText] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        setText(e.target.value);
      };

    const handleClick =(event)=>{
        event.preventDefault();
        const newReply={
            text: text,
        }
    
        addNewComment(newReply);
        setText('');
    }

    const showForms = () => {
        setShowForm(!showForm)
    }

    const addNewComment = (newReply) => {
        axios.post(`http://localhost:5001/api/comment/reply/${comment_id}`, newReply)   
      }

    return (
        <div>
            <button onClick={() => {showForms();}}>reply</button>
            {showForm && (
                <form action="">
                    <textarea style={{width: '100%', borderRadius: '5px'}}name="" placeholder="write some comments"onChange={(e)=>handleChange(e)}></textarea>
                    <div className="replyButton">
                    <button onClick={(e) => handleClick(e)}>Submit reply</button>
                    </div>
                </form>  
            )}


        </div>
    )
}

export default Replies;




