import session from "async-local-storage";
import {ToDoService} from '../services/toDoService.js'


export class ToDoController {
  static _create = async (ctx) => {
    try {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `init add todo: ${JSON.stringify(ctx.request.body)}`,
        })
      );
      const { task } = ctx.request.body;
      if (!task) {
        ctx.status = 400;
        ctx.body = {
          success: false,
          message: "Task can not be empty",
        };
        return;
      }
      let response = await ToDoService._add(task);
      ctx.status = 200;
      ctx.body = response;
    } catch (e) {
      console.log(
        JSON.stringify({
          requestId: session.get("requestId"),
          data: `add todo Exception: ${e.stack}`,
        })
      );
      ctx.status = 500;
      ctx.body = { success: false, message: e.message };
    }
  };
}
