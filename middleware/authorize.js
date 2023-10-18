import jwt from "jsonwebtoken";
import db from "../models/index.js";
import env from '../config/env.js'

export const authorize = async (ctx,next) => {
  console.log("ctxxx", ctx);
  //await next();
  if (!ctx.request.headers.authorization) {
    return res.status(401).send({ error: "Unauthorized" });
  }

   const token = ctx.request.headers.authorization.split(" ")[1];
   const decoded =  jwt.verify(
    token,
    env().JWT_SECRET,
    { expiresIn: "24h" })
    console.log("decoded==", decoded);
   if(!decoded)
    {
       ctx.status = 401;
             ctx.body={success:false, message:"Unauthorized"}
             return
    }
   const user = await db.User.findByPk(decoded.id.id);
   //  const user = await db.User.findAll();

   console.log("user=======", user);
       if (!user) {
         ctx.status = 404;
         ctx.body = { success: false, message: "User does not exist" };
         return;
        }
        ctx.userId = decoded.id.id;
        return await next()
};
