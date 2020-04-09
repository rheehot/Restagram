const models = require('../models');
const debug = require('debug')('PostsService');

const getFollowingIds = async (user_id) => {
  debug(`사용자가 팔로잉하는 사람들 ID 가져오기: ${user_id}`);
  const followingIds = (
    await models.follows.findAll({
      where: { user_follower_id: user_id },
    })
  ).map((following) => following.dataValues.user_following_id);
  return followingIds;
};

const getInfoFromUserId = async (user_id) => {
  debug(`사용자 ID로부터 정보 가져오기: ${user_id}`);
  const db = await models.users.findOne({ where: { user_id } });
  const { user_name, user_profile } = db.dataValues;
  debug(user_profile);
  return { user_id, user_name, user_profile };
};

const getPhotosFromPostId = async (post_id) => {
  debug(`포스트 ID로부터 사진들 가져오기: ${post_id}`);
  const photos = (
    await models.photos.findAll({ where: { photo_post_id: post_id } })
  ).map((photo) => {
    const { photo_id, photo_path } = photo.dataValues;
    return { photo_id, photo_path };
  });
  return photos;
};

const getCommentsFromPostId = async (post_id) => {
  debug(`포스트 ID로부터 댓글들 가져오기: ${post_id}`);
  const dbComments = await models.comments.findAll({
    where: { comment_post_id: post_id },
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

const getPost = async (post_id) => {
  const dbPost = await models.posts.findOne({
    where: { post_id },
  });
  const { post_content, post_date, post_user_id } = dbPost.dataValues;
  const dbUser = await models.users.findOne({
    where: { user_id: post_user_id },
  });
  const { user_name, user_profile } = dbUser.dataValues;
  const photos = await getPhotosFromPostId(post_id);
  const comments = await getCommentsFromPostId(post_id);
  return {
    user_id: post_user_id,
    user_name,
    user_profile,
    post_id,
    post_content,
    post_date,
    post_photos: photos,
    post_comments: comments,
  };
};

const getPostsFromUserId = async (user_id) => {
  debug(`사용자 ID로부터 포스트들 가져오기: ${user_id}`);
  const userInfo = await getInfoFromUserId(user_id);
  const dbPosts = await models.posts.findAll({
    where: { post_user_id: user_id },
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
  async loadFeed(user_id) {
    debug(`피드 로드하기: ${user_id}`);
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

  async loadPost(post_id) {
    debug(`포스트 로드하기: ${post_id}`);
    const post = await getPost(post_id);
    debug(post);
    return post;
  }
}

module.exports = PostsService;
