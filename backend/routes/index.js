const express = require('express');
const router = express.Router();
const auth = require('./auth');
const posts = require('./posts');

router.use('/auth', auth);
router.use('/posts', posts);

module.exports = router;
