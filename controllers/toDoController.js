import session from "async-local-storage";
import TodoService from "../services/todoService.js";

export default class TodoController {
  static create = async (ctx) => {
    try {
      const { title } = ctx.request.body;

      // Validation
      if (!title) {
        ctx.throw(400, "Title is required");
      }

      const todo = await TodoService._createTodo(title, ctx.userId);
      ctx.status = 201;
      ctx.body = todo;
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static fetchAll = async (ctx) => {
    try {
      
      if (!ctx.request.query.userId) {
        ctx.status = 400;
        ctx.body = { success: false, message: "Bad Request Used id is empty" };
        return;
      }
      const todos = await TodoService._findAllToDoOfUser(
        ctx.request.query.userId
      );
      ctx.status = 200;
      ctx.body = {success:true,data:todos};
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static fetchOne = async (ctx) => {
    try {
      const { todoId } = ctx.params;

      // Validation
      if (!todoId) {
        ctx.throw(400, "todoId is required");
      }

      const todo = await TodoService._findById(todoId);
      ctx.status = 200;
      ctx.body = { success: true, data: todo };
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static update = async (ctx) => {
    try {
      const { title } = ctx.request.body;
      const { todoId } = ctx.params;

      // Validation
      if (!todoId) {
        ctx.throw(400, "todoId is required");
      }

      const updatedTodo = await TodoService._update(todoId, title);
      ctx.status = 200;
      ctx.body = {success:true,data:"todo updated"};
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static delete = async (ctx) => {
    try {
      const { todoId } = ctx.params;

      // Validation
      if (!todoId) {
        ctx.throw(400, "todoId is required");
      }

      await TodoService._delete(todoId);
      ctx.status = 200;
      ctx.body = {};
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };
}
