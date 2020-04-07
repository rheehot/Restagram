const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const models = require('../models');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config/jwt-secret');

const encrypt = (password, dbSalt) => {
  const buffer = Buffer.alloc(64);
  const salt = dbSalt || crypto.randomFillSync(buffer).toString('hex');
  return {
    salt,
    encryptedPassword: crypto
      .scryptSync(password, salt, 64, { N: 1024 })
      .toString('hex'),
  };
};

router.post(
  '/user',
  asyncHandler(async (req, res, next) => {
    const { user_name, user_password, user_nick } = req.body;
    const encryption = encrypt(user_password);
    try {
      const result = await models.users.create({
        user_name,
        user_password: encryption.encryptedPassword,
        user_salt: encryption.salt,
        user_nick,
      });
      res.status(200).json(result);
      throw new Error('Auth error!');
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

router.post(
  '/session',
  asyncHandler(async (req, res, next) => {
    const { user_name, user_password } = req.body;
    try {
      const dbData = await models.users.findOne({
        where: { user_name },
      });
      const dbPassword = dbData.dataValues.user_password;
      const encryption = encrypt(user_password, dbData.dataValues.user_salt);
      if (encryption.encryptedPassword !== dbPassword) return;
      const token = jwt.sign(
        {
          user_name,
          user_password: encryption.encryptedPassword,
        },
        jwtSecret,
      );
      res.cookie('user', token);
      res.json(token);
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

module.exports = router;
