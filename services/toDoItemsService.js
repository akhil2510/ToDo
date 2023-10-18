import session from "async-local-storage";
import db from "../models/index.js";

export default class ToDoItemsService {
  static createItem = async (description, toDoId) => {
    try {
      let toDoReq = {
        ToDoId: toDoId,
        description: description,
      };
      let taskAddResponse = await db.ToDoItems.create(toDoReq);
      return taskAddResponse;
    } catch (e) {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `add todo Exception service: ${e.stack}`,
        })
      );
      throw new Error("Error in creating todo", e);
    }
  };
  static update = async (todoId,taskId, text = "", isCompleted = false) => {
    try {
      let updateReq = {};
      if (text) {
        updateReq["description"] = text;
      }
      if (isCompleted) {
        updateReq["isCompleted"] = true;
      }
      let taskUpdateResponse = await db.ToDoItems.update(updateReq, {
        where: {
          id: taskId,
          ToDoId: todoId,
        },
      });
      return taskUpdateResponse;
    } catch (e) {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `update todo Exception service: ${e.stack}`,
        })
      );
      throw new Error("Error in creating todo", e);
    }
  };
  static fetchOne = async (taskId,todoId) => {
    try {
      let taskResponse = await db.ToDoItems.findAll({
        where: {
          id: taskId,
          ToDoId: todoId,
        },
        include: {
          model: db.ToDo,
        },
      });
      return taskResponse;
    } catch (e) {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `get todo by id Exception service: ${e.stack}`,
        })
      );
      throw new Error("Error in get todo by id ", e);
    }
  };
  static fetchAllItems = async (toDoId) => {
    try {
      let taskResponse = await db.ToDoItems.findAll({
        where: {
          ToDoId: toDoId,
        },
        // include: {
        //   model: db.ToDo,
        // },
      });
      return taskResponse;
    } catch (e) {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `get todo by id Exception service: ${e.stack}`,
        })
      );
      throw new Error("Error in get todo by id ", e);
    }
  };
  static delete = async (taskId) => {
    try {
      let taskDeleteResponse = await db.ToDoItems.destroy({
        where: {
          id: taskId,
        },
      });
      return taskDeleteResponse;
    } catch (e) {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `delete todo Exception service: ${e.stack}`,
        })
      );
      throw new Error("Error in delete todo", e);
    }
  };
}
