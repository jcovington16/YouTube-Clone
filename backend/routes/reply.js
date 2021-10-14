const {Comment, validateComment} = require('../models/comment');
const {Reply, validateReply} = require('../models/reply');
const express = require('express');
const router = express.Router();