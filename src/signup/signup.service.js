import bcrypt from 'bcrypt';
import User from '../models/User.js';
import AuthService from '../utils/auth.service.js';

const { SALT_ROUNDS } = process.env;

class SignupService extends AuthService {
  async hashPassword(password) {
    return await bcrypt.hash(password, +SALT_ROUNDS);
  }

  async register(data) {
    return await User.create(data);
  }
}

export default new SignupService();
