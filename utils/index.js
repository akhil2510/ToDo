import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import  env  from '../config/env.js';

export const jwtToken = {
  createToken({ id, mobile }) {
    return jwt.sign({ userId: id, mobile }, env.JWT_SECRET, {
      expiresIn: "24h",
    });
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    return decoded;
  },
};

export const hashPassword = (password) => bcrypt.hashSync(password, 10);
export const comparePassword = (password, hash) =>
  bcrypt.compareSync(password, hash);
