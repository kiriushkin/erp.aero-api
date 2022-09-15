import bcrypt from 'bcrypt';
import AuthService from '../utils/auth.service.js';

class SigninService extends AuthService {
  async comparePasswords(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

export default new SigninService();
