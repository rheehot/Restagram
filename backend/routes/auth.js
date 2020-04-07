const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const AuthService = require('../services/AuthService');

const auth = new AuthService();

router.post(
  '/user',
  asyncHandler(async (req, res, next) => {
    try {
      const result = await auth.register(req.body);
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
    try {
      const token = await auth.login(req.body);
      res.cookie('user', token);
      res.json(token);
    } catch (e) {
      console.warn(e.message);
      next(e);
    }
  }),
);

module.exports = router;
