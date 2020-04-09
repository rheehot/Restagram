const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const PostsService = require('../services/PostsService');

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    try {
      const postsService = new PostsService();
      const { user_id } = req.body;
      const feed = await postsService.loadFeed(user_id);
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

router.get(
  '/:post_id',
  asyncHandler(async (req, res, next) => {
    try {
      const postsService = new PostsService();
      const { post_id } = req.params;
      const post = await postsService.loadPost(post_id);
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

module.exports = router;
