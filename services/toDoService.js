import session from 'async-local-storage'
import db from '../models/index.js'


export class ToDoService {
  static _add = async (title) => {
    try {
      let toDoReq = {
        title: title,
      };
      let toDoRes = await db.ToDo.create(toDoReq);
      return { success: true, data: toDoRes };
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
  static _update = async (todoId) => {
    try {
      let toDoUpdateResponse = await db.ToDo.update(updateReq, {
        where: {
          id: todoId,
        },
      });
      return toDoUpdateResponse;
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
  static _findById = async (toDoId) => {
    try {
      let toDoResponse = await db.ToDo.findByPk(toDoId);
      return toDoResponse;
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
  static _findAllToDoOfUser = async (userId) => {
    try {
      let toDoResponse = await db.ToDo.findAll({
        where: {
          UserId: userId,
        },
      });
      return toDoResponse;
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
  static _delete = async (toDoId) => {
    try {
      let toDoDeleteResponse = await db.ToDo.destroy({
        where: {
          id: toDoId,
        },
      });
      return toDoDeleteResponse;
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
