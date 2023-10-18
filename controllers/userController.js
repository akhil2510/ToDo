import { UserService } from "../services/userService.js";

export class UserController {
  static signUpUser = async (ctx) => {
    try {
      console.log("ctx===", ctx.request);
      const { username, mobile } = ctx.request.body;
      const user = await UserService.signUpUser(username, mobile);
      console.log("==user==", user);
      ctx.body = { userId: user.id, token: user.token };
      return;
    } catch (error) {
      console.log("error: " + error);
      ctx.throw(500, "Internal Server Error");
    }
  };

  static logInUser = async (ctx) => {
    try {
      const { username, mobile } = ctx.request.body;

      const user = await UserService.logInUser(username, mobile);
      console.log("user=1=", user);
      ctx.body = { userId: user.id, token: user.token };
      return;
    } catch (e) {
      ctx.throw(500, "Internal Server Error", e);
    }
  };
}
