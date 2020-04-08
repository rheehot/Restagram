const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const PostsService = require('../services/PostsService');

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    try {
      const posts = new PostsService();
      const feed = await posts.loadFeed(req.body);
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

module.exports = router;
