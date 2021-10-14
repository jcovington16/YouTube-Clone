const {Comment, validateComment} = require('../models/comment');
const express = require('express');
const router = express.Router();

router.put('/likes/:commentID', async(req, res) => {
    try {
        const {error} = validateComment(req.body);
        if(error) {
            return res.status(400).send(error);
        }

        const comment = await Comment.findByIdAndUpdate(req.params.commentID, {
            likes: req.body.likes += 1
        })
        
        await comment.save();
        return res.send(comment)

    } catch(ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;