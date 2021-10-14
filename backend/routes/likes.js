const {Comment, validateComment} = require('../models/comment');
const express = require('express');
const router = express.Router();

router.put('/:commentID', async(req, res) => {
    try {
        const {error} = validateComment(req.body);
        if(error) {
            return res.status(400).send(error);
        }

        const like = await Comment.findByIdAndUpdate(req.params.commentID, {
            likes: req.body.likes += 1
        })
        
        await like.save();
        return res.send(like)

    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;