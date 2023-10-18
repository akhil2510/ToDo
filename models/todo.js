import pkg from "sequelize";
const { Sequelize, DataTypes, Model } = pkg;

export default class ToDo extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        }
      },
      {
        sequelize,
        tableName: "my_todo",
        schema: "public",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
