import { UserService } from "../services/userService";


export class UserController{
 static signUpUser = async (ctx) => {
  try {
    const { username, mobile } = ctx.request.body;
    const user  = await UserService.signUpUser(username, mobile);
    ctx.body = { userId: user.id, token: user.token };
    return
  } catch (error) {
    ctx.throw(500, "Internal Server Error");
  }
};

 static logInUser = async (ctx) => {
  try {
    const { mobile, username } = ctx.request.body;
   const user = await UserService.logInUser(mobile, token);
    ctx.body = { userId: user.id, token: user.token };
    return 
  } catch (error) {
    ctx.throw(500, "Internal Server Error");
  }
}
}

