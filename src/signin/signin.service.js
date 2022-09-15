import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import AuthService from '../utils/auth.service.js';

const { REFRESH_TOKEN_SECRET } = process.env;

class SigninService extends AuthService {
  async comparePasswords(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  verifyToken(token) {
    return jwt.verify(token, REFRESH_TOKEN_SECRET);
  }
}

export default new SigninService();
