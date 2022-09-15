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

      console.log(user);

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
}

export default new SigninControllers();
