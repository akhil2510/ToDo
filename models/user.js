import pkg from "sequelize";
const { Sequelize, DataTypes, Model } = pkg;

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        mobile: {
          type: DataTypes.STRING(100),
          unique: true,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(300),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "users",
        schema: "public",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
