const models = require('../models');
const debug = require('debug')('PostsService');

const getFollowingIds = async (userId) => {
  debug(`Call getFollowingIds with userId: ${userId}`);
  const followingIds = (
    await models.follows.findAll({
      where: { user_follower_id: userId },
    })
  ).map((following) => following.dataValues.user_following_id);
  return followingIds;
};

const getInfoFromUserId = async (userId) => {
  debug(`Call getInfoFromUserId with userId: ${userId}`);
  const db = await models.users.findOne({ where: { user_id: userId } });
  const { user_name, user_profile } = db.dataValues;
  debug(user_profile);
  return { user_id: userId, user_name, user_profile };
};

const getPhotosFromPostId = async (postId) => {
  debug(`Call getPhotosFromPostId with postId: ${postId}`);
  const photos = (
    await models.photos.findAll({ where: { photo_post_id: postId } })
  ).map((photo) => {
    const { photo_id, photo_path } = photo.dataValues;
    return { photo_id, photo_path };
  });
  return photos;
};

const getCommentsFromPostId = async (postId) => {
  debug(`Call getCommentsFromPostId with postId: ${postId}`);
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

const getPost = async (postId) => {
  const dbPost = await models.posts.findOne({
    where: { post_id: postId },
  });
  const { post_content, post_date, post_user_id } = dbPost.dataValues;
  const dbUser = await models.users.findOne({
    where: { user_id: post_user_id },
  });
  const { user_name, user_profile } = dbUser.dataValues;
  const photos = await getPhotosFromPostId(postId);
  const comments = await getCommentsFromPostId(postId);
  return {
    user_id,
    user_name,
    user_profile,
    post_id,
    post_content,
    post_date,
    post_photos: photos,
    post_comments: comments,
  };
};

const getPostsFromUserId = async (userId) => {
  debug(`Call getPostsFromUserId with userId: ${userId}`);
  const userInfo = await getInfoFromUserId(userId);
  const dbPosts = await models.posts.findAll({
    where: { post_user_id: userId },
  });
  const posts = [];
  for (let dbPost of dbPosts) {
    const { user_id, user_name, user_profile } = userInfo;
    const { post_id } = dbPost.dataValues;
    const post = await getPost(post_id);
    posts.push(post);
  }
  return posts;
};

class PostsService {
  async loadFeed(body) {
    debug(`피드 로드하기: ${JSON.stringify(body)}`);
    const { user_id } = body;
    const followingIds = await getFollowingIds(user_id);
    let feed = [];
    for (let id of followingIds) {
      const posts = await getPostsFromUserId(id);
      feed = feed.concat(posts);
    }
    feed.sort((post1, post2) => post1.post_date - post2.post_date);
    debug(feed);
    return feed;
  }

  async loadPost(body) {
    debug(`포스트 로드하기: ${JSON.stringify(body)}`);
    const { post_id } = body;
    const post = await getPost(post_id);
    return post;
  }
}

module.exports = PostsService;
