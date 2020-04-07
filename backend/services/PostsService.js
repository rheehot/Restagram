const models = require('../models');

const getFollowingIds = async (user_id) => {
  const followingIds = (
    await models.follows.findAll({
      where: { follower_user_id: user_id },
    })
  ).map((following) => following.dataValues.following_user_id);
  return followingIds;
};

const getInfosFromUserIds = async (userIds) => {
  const userInfos = [];
  for (let user_id of userIds) {
    const info = await models.users.findOne({ where: { user_id } });
    const { user_name, user_profile } = info.dataValues;
    userInfos.push({
      user_id,
      user_name,
      user_profile,
    });
  }
  return userInfos;
};

const getPhotosFromPostId = async (postId) => {
  const photos = (
    await models.photos.findAll({ where: { photo_post_id: postId } })
  ).map((photo) => ({
    const { photo_id, photo_path } = photo.dataValues;
    photo_id,
    photo_path,
  }));
};

const getCommentsFromPostId = async (postId) => {
  const dbComments = await models.comments.findAll({
    where: { comment_post_id: postId },
  });
  const comments = [];
  for (let comment of dbComments) {
    const commentUserInfo = await models.users.findOne({
      where: { user_id: comment.dataValues.comment_user_id },
    });
    const { comment_id, comment_content } = comment;
    const { user_id, user_profile, user_name } = commentUserInfo;
    comments.push({
      comment_id,
      comment_content,
      user_id,
      user_profile,
      user_name,
    });
  }
  return comments;
};

const getPostsFromUserId = async (userId) => {
  const dbPosts = await models.posts.findAll({
    where: { post_user_id: userId },
  });
  const posts = [];
  for (let post of dbPosts) {
    const { post_id, post_content, post_date } = post.dataValues;
    const photos = await getPhotosFromPostId(post_id);
    const comments = await getCommentsFromPostId(post_id);
    posts.push({
      user_id: userId,
      post_id,
      post_content,
      post_date,
      post_photos: photos,
      post_comments: comments,
    });
  }
  return posts;
};

class PostsService {
  async loadFeed(body) {
    const { user_id } = body;
    const followingIds = await getFollowingIds(user_id);
    const feed = [];
    for (let id of followingIds) {
      const posts = await getPostsFromUserId(id);
      feed.concat(posts);
    }
    feed.sort((post1, post2) => post1.post_date - post2.post_date);
    return feed;
  }
}
