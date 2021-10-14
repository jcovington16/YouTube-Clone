const {Comment, validateComment} = require('../models/comment');
const {Reply, validateReply} = require('../models/comment');
const express = require('express');
const router = express.Router();

router.get('/:commentId', async (req, res) => {
    try {
        const reply = await Reply.find({videoID:req.params.commentId});
        return res.send(reply);
    } catch (ex) {
        return  res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/', async(req, res) => {
    try{
        const {error} = validateReply(req.body);
        if (error){
            return res.status(400).send(error);
        }
        const reply = new Reply({
            text: req.body.text,
            videoID: req.body.videoID, 
            timeStamp: req.body.timeStamp,
        });
        await reply.save();
        return res.send(reply);
    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.put('/:replyId', async (req, res) => {
    try{
        const reply = await Reply.findByIdAndUpdate(
            req.params.replyId,
            {
            text: req.body.text,
            timeStamp: req.body.timeStamp,
        }
        );

        await reply.save();

        return res.send(reply);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});


module.exports = router;