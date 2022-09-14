import bcrypt from 'bcrypt';
import User from '../models/User.js';

const { SALT_ROUNDS } = process.env;

class SignupService {
  async findUser(id) {
    return await User.findByPk(id);
  }

  async hashPassword(password) {
    return await bcrypt.hash(password, +SALT_ROUNDS);
  }

  async register(data) {
    return await User.create(data);
  }
}

export default new SignupService();
