const {Comment, validateComment} = require('../models/comment');
const express = require('express');
const router = express.Router();

router.put('/:commentID', async(req, res) => {
    try {
        const {error} = validateComment(req.body);
        if(error) {
            return res.status(400).send(error);
        }

        const dislike = await Comment.findByIdAndUpdate(req.params.commentID, {
            dislikes: req.body.dislikes += 1
        })
        
        await dislike.save();
        return res.send(dislike)

    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;