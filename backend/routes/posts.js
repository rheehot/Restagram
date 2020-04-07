const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const models = require('../models');

// const getFollowingsInfo = async (user_id) => {
//   const followings = (
//     await models.follows.findAll({
//       where: { user_follower_id: user_id },
//     })
//   ).map((following) => following.dataValues.user_following_id);
//   const followingsInfo = [];
//   for (let following_id of followings) {
//     const userData = await models.users.findOne({
//       where: { user_id: following_id },
//     });
//     const postList = await models.posts.findAll({
//       where: { post_user_id: following_id }
//     });
//     for (let post of postList) {
//       const photoList = (await models.photos.findAll({
//         where: { photo_post_id: post.dataValues.post_id }
//       })).map(photo => photo.dataValues.photo_path);
//       const commentList = (await models.comments.findAll({
//         where: { comment_post_id: post.dataValues.post_id }
//       })).map(comment => comment_content);

//     }
//     followingsInfo.push({
//       user_id: userData.dataValues.user_id,
//       user_name: userData.dataValues.user_name,
//       user_profile: userData.dataValues.user_profile,
//       post_id:
//     });
//   }
//   return followingsInfo;
// };

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const { user_id } = req.body;
    try {
      const followingsInfo = await getFollowingsInfo(user_id);
      console.log(followingsInfo);
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

module.exports = router;
