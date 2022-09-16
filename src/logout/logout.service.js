import Token from '../models/Token.js';

class LogoutService {
  async logout(token, exp) {
    let date = new Date(0);
    date.setUTCSeconds(exp);

    return await Token.create({ token, expireDate: date });
  }
}

export default new LogoutService();
