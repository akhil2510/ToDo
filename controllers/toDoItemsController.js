import TodoItemService from "../services/toDoItemsService.js";

export default class TodoItemController {
  static create = async (ctx) => {
    try {
      const { text, todoId } = ctx.request.body;

      // Validation
      if (!text) {
        ctx.throw(400, "Text is required");
      }
      if (!todoId) {
        ctx.throw(400, "todoId is required");
      }

      const item = await TodoItemService.createItem(text, todoId);
      ctx.status = 201;
      ctx.body = item;
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static fetchAll = async (ctx) => {
    try {
      const { todoId } = ctx.request.params;

      // Validation
      if (!todoId) {
        ctx.throw(400, "todoId is required");
      }

      const items = await TodoItemService.fetchAllItems(todoId);
      ctx.status = 200;
      ctx.body = { success: true, data: items };
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static fetchOne = async (ctx) => {
    try {
      const { todoItemId,todoId } = ctx.request.params;

      // Validation
      if (!todoItemId) {
        ctx.throw(400, "todoItemId  is required");
      }
      if (!todoId) {
        ctx.throw(400, "todoId  is required");
      }

      const item = await TodoItemService.fetchOne(todoItemId, todoId);
      ctx.status = 200;
      ctx.body = { success: true, data: item };
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static update = async (ctx) => {
    try {
      console.log("ctx.request", ctx.request.query);
      const { text, isCompleted } = ctx.request.body;
      const { todoItemId, todoId } = ctx.request.query;

      // Validation
      if (!todoItemId) {
        ctx.throw(400, "todoItemId is required");
      }

      const updatedItem = await TodoItemService.update(
        todoId,
        todoItemId,
        text,
        isCompleted
      );
      ctx.status = 200;
      ctx.body = { success: true, data: updatedItem };
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static delete = async (ctx) => {
    try {
      const { todoItemId } = ctx.params;

      // Validation
      if (!todoItemId) {
        ctx.throw(400, "todoItemId is required");
      }

      await TodoItemService.deleteItem(todoItemId);
      ctx.status = 200;
      ctx.body = {};
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };
}
