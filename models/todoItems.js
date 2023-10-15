import pkg from "sequelize";
const { Sequelize, DataTypes, Model } = pkg;

export default class ToDoItems extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        description: {
          type: DataTypes.STRING(1000),
        },
        isCompleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        sequelize,
        tableName: "my_tasks",
        schema: "public",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }
}
