import logoutService from './logout.service.js';

class LogoutControllers {
  async logout(req, res) {
    try {
      await logoutService.logout(req.token, req.decode.exp);

      res.send({ message: 'Successfully logged out' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new LogoutControllers();
