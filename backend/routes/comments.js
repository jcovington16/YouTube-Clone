const {Comment, Reply, validateComment, validateReply} = require('../models/comment');
const express = require('express');
const router = express.Router();

router.get('/:videoID', async (req, res) => {
    try {
        const comment = await Comment.find({videoID:req.params.videoID});
        return res.send(comment);
    } catch (ex) {
        return  res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/', async(req, res) => {
    try{
        const {error} = validateComment(req.body);
        if (error){
            return res.status(400).send(error);
        }
        const comment = new Comment({
            text: req.body.text,
            videoID: req.body.videoID, 
            timeStamp: req.body.timeStamp,
            likes: req.body.likes
        });
        await comment.save();
        return res.send(comment);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/reply/:commentId', async(req, res) => {
    try {
        const {error} = validateReply(req.body);
        if(error) {
            return res.status(400).send(error);
        }

        const comment = await Comment.findById(req.params.commentId);
        const new_reply = new Reply({
            text: req.body.text,
            timeStamp: req.body.timeStamp
        });
        
        await new_reply.save();
        comment.replies.push(new_reply);
        
        return res.send(comment.replies);
    } catch(ex) {
        return res.status(500).send(`Internal Sever Error: ${ex}`);
    }
});

router.put('/likes/:commentId', async(req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId)
            comment.likes+=1
        
        await comment.save();
        return res.send(comment)
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.put('/dislikes/:commentId', async(req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId)
            comment.dislikes+=1
        
        await comment.save();
        return res.send(comment)
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;
