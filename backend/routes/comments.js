const {Comment, validateComment} = require('../models/comment');
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
        });
        await comment.save();
        return res.send(comment);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.put('/:commentId', async (req, res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(
            req.params.commentId,
            {
            text: req.body.text,
            timeStamp: req.body.timeStamp,
        }
        );

        await comment.save();

        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;
