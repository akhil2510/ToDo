import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  env  from '../config/env.js';

export const jwtToken = {
  createToken( id, mobile ) {
    let token
    console.log('id===', id,'mobile===', mobile);
    try{
     token =  jwt.sign({ id: id, mobile:mobile }, env().JWT_SECRET, {
      expiresIn: "2h",
    });
    console.log("token===", token);
  }
  catch(e)
  {
    console.log("err",e);
  }
    return token;
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, env().JWT_SECRET, {
      expiresIn: "24h",
    });
    console.log("==decoded", decoded);
    return decoded;
  },
};

export const hashPassword = (password) => bcrypt.hashSync(password, 10);
export const comparePassword = (password, hash) =>
  bcrypt.compareSync(password, hash);
