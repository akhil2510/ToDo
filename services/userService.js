
import {jwtToken} from '../utils/index.js'

export class UserService {
  static signUpUser = async (username,mobile) => {
    try {
      const user = await db.User.create({
        name: username,
        mobile: mobile,
      });
      const token = await Jwt.sign({mobile: mobile})
      return {token: token,id:user.id}
    } catch (e) {
        console.log('error in sign up');
    }
  };

  static logInUser = async (username, mobile) => {
    try {
        const user = await User.findOne({ where: { name:username,mobile:mobile } });

        if (!user) {
          ctx.throw(401, "Invalid username or mobile");
        }

        const token = Jwt.sign(
          {mobile: mobile},
        );
       return { token: token, id: user.id }; 
    } catch (e) {
        console.log("error in login user", e);
    }
  }
}