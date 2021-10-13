const monogoose = require('mongoose');
const Joi = require('joi');

const replySchema = new monogoose.Schema({
    text: {type: String, required: true, minlength: 5, maxlength: 500},
    timeStamp: {type: Date, default: Date.now()},
});


const commentSchema = new monogoose.Schema({
    text: {type: String, required: true, minlength: 5, maxlength: 500},
    videoID: {type: String, required: true},
    timeStamp: {type: Date, default: Date.now()},
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
    replies: {type: [replySchema], default:[]}
});

const Reply = monogoose.model('Reply', replySchema);
const Comment = monogoose.model('Comment', commentSchema);

function validateComment(comment) {
    const schema = Joi.object({
        text: Joi.string().required().min(5).max(500),
        videoID: Joi.string().required()
    });
    return schema.validate(comment)
}

function validateReply(reply) {
    const schema = Joi.object({
        text: Joi.string().required().min(5).max(500)
    });
    return schema.validate(reply)
}

module.exports = {
    Reply,
    Comment,
    validateComment,
    validateReply
}
