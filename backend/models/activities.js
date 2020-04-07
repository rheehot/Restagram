/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'activities',
    {
      activity_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      activity_type: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      activity_follower_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      activity_user_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'users',
          key: 'user_id',
        },
      },
      activity_post_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'posts',
          key: 'post_id',
        },
      },
    },
    {
      tableName: 'activities',
      timestamps: false,
    },
  );
};
