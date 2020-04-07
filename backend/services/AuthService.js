const crypto = require('crypto');
const models = require('../models');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../config').jwtSecret;

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

class AuthService {
  async register(body) {
    const { user_name, user_password, user_nick } = body;
    const encryption = encrypt(user_password);
    const result = await models.users.create({
      user_name,
      user_password: encryption.encryptedPassword,
      user_salt: encryption.salt,
      user_nick,
    });
    return result;
  }

  async login(body) {
    const { user_name, user_password } = body;
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
    return token;
  }
}

module.exports = AuthService;
