const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const models = require('../models');
const asyncHandler = require('express-async-handler');

const encrypt = (password) => {
  const buffer = Buffer.alloc(64);
  const salt = crypto.randomFillSync(buffer);
  return crypto.scryptSync(password, salt, 64, { N: 1024 }).toString('hex');
};

router.post(
  '/user',
  asyncHandler(async (req, res) => {
    const { user_name, user_password, user_nick } = req.body;
    const encryptedPassword = encrypt(user_password);
    try {
      const result = await models.users.create({
        user_name,
        user_password: encryptedPassword,
        user_nick,
      });
      res.status(200).json(result);
    } catch (e) {
      console.warn(e.message);
    }
  }),
);

module.exports = router;
