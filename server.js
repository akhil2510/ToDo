import router from './router.js'
import { jwtToken } from "./utils/index.js";
import db from './models/index.js'


const applyMiddleware = (app) => {

  // authorization
  // app.use(async(ctx, next)=> {
  //   const authtoken = ctx.header.authorization;
  //   if (!authtoken) {
  //     ctx.throw(401, "Unauthorized");
  //   }
  //   const mobile = ctx.request.header['mobile'];
  //   const token = authtoken.split(" ")[1];
  //   const decodedData = jwtToken.verifyToken(token);
  //   const user = await db.User.findByPk(decodeData.id)
  //   if(!user)
  //   {
  //     ctx.throw(401, "Use Does not exist");
  //   }
  //   ctx.request.decodedData = decodedData
  //     return next()
  //   })
  app.on("error", (err, ctx) => {
    console.log(`Error in koa server : ${err}`);
  })
  app.use(router);
};

export default applyMiddleware;
