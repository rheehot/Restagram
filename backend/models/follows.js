/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'follows',
    {
      follow_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_following_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      user_follower_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
    },
    {
      tableName: 'follows',
      timestamps: false,
    },
  );
};
