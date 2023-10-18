
import {jwtToken} from '../utils/index.js'
import db from '../models/index.js'

export class UserService {
  static signUpUser = async (username,mobile) => {
    try {
      console.log('username===', username,'mobile===', mobile);
      const user = await db.User.create({
        name: username,
        mobile: mobile,
      });
      console.log('user===', user)
      console.log('mo.dataValues.user_idbile===', user.dataValues.id)
      const token =await jwtToken.createToken(
        user.dataValues.id,
       mobile,
      );
      console.log('token===', token)
      return { token: token, id: user.dataValues.id };
    } catch (e) {
        console.log('error in sign up',e);
    }
  };

  static logInUser = async (username, mobile) => {
    try {
        let user = await db.User.findOne({ where: {mobile:mobile } });
        console.log("---user",user);
        if (!user) {
          ctx.throw(401, "Invalid username or mobile");
        }
        user = user.dataValues
        const token = jwtToken.createToken({
          id: user.id,
          mobile: mobile,
        });
        console.log('---token',token);
        return { token: token, id: user.id };
    } catch (e) {
        console.log("error in login user", e);
    }
  }
}