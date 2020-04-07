/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'photos',
    {
      photo_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      photo_path: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      photo_post_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'posts',
          key: 'post_id',
        },
      },
    },
    {
      tableName: 'photos',
      timestamps: false,
    },
  );
};
