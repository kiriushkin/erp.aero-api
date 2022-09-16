import signinService from './signin.service.js';

class SigninControllers {
  async login(req, res) {
    try {
      if (!req.body.id || !req.body.password)
        return res
          .status(400)
          .send({ message: 'User id or password is missing.' });

      const { id, password } = req.body;

      const user = await signinService.findUser(id);

      if (!user) return res.status(404).send({ message: 'User not found.' });

      const isEqual = await signinService.comparePasswords(
        password,
        user.password
      );

      if (!isEqual)
        return res.status(400).send({ message: 'Passwords do not match.' });

      const tokens = await signinService.generateTokens({ id });

      res.send(tokens);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }

  async refreshToken(req, res) {
    try {
      const header = req.get('Authorization');

      if (!header)
        return res
          .status(401)
          .send({ message: 'Authorization header is missing.' });

      const token = header.split(' ')[1];

      const decode = signinService.verifyToken(token);

      const { accessToken } = signinService.generateTokens({ id: decode.id });

      res.send({ accessToken });
    } catch (err) {
      if (err.message === 'invalid signature')
        return res.status(401).send({ message: 'Provided token is invalid.' });

      if (err.message === 'jwt expired')
        return res.status(401).send({ message: 'Provided token is expired.' });

      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new SigninControllers();
