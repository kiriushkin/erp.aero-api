import signupService from './signup.service.js';

class SignupControllers {
  async register(req, res) {
    try {
      if (!req.body.id || !req.body.password)
        return res
          .status(400)
          .send({ message: 'User id or password is missing.' });

      const { id, password } = req.body;

      const user = await signupService.findUser(id);

      if (user)
        return res.status(400).send({ message: 'User already registered.' });

      const hash = await signupService.hashPassword(password);

      await signupService.register({ id, password: hash });

      const tokens = signupService.generateTokens({ id });

      res.status(201).send(tokens);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: err.message });
    }
  }
}

export default new SignupControllers();
