import {TodoItemService} from '../services/toDoItemsService.js'

export class TodoItemController {
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
      const { todoId } = ctx.params;

      // Validation
      if (!todoId) {
        ctx.throw(400, "todoId is required");
      }

      const items = await TodoItemService.fetchAllItems(todoId);
      ctx.status = 200;
      ctx.body = items;
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static fetchOne = async (ctx) => {
    try {
      const { todoItemId } = ctx.params;

      // Validation
      if (!todoItemId) {
        ctx.throw(400, "todoItemId is required");
      }

      const item = await TodoItemService.fetchOneItem(todoItemId);
      ctx.status = 200;
      ctx.body = item;
    } catch (e) {
      ctx.throw(500, e.message);
    }
  };

  static update = async (ctx) => {
    try {
      const { text, isCompleted } = ctx.request.body;
      const { todoItemId } = ctx.params;

      // Validation
      if (!todoItemId) {
        ctx.throw(400, "todoItemId is required");
      }

      const updatedItem = await TodoItemService.updateItem(
        todoItemId,
        text,
        isCompleted
      );
      ctx.status = 200;
      ctx.body = updatedItem;
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