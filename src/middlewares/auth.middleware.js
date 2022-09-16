import jwt from 'jsonwebtoken';
import Token from '../models/Token.js';

const { ACCESS_TOKEN_SECRET } = process.env;

export default async (req, res, next) => {
  try {
    const header = req.get('Authorization');

    if (!header)
      return res
        .status(401)
        .send({ message: 'Authorization header is missing.' });

    const token = header.split(' ')[1];

    const isBlocked = await Token.findByPk(token);

    if (isBlocked)
      return res.status(401).send({ message: 'Provided token is invalid.' });

    req.decode = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.token = token;

    next();
  } catch (err) {
    if (err.message === 'invalid signature')
      return res.status(401).send({ message: 'Provided token is invalid.' });

    if (err.message === 'jwt expired')
      return res.status(401).send({ message: 'Provided token is expired.' });

    console.error(err);
    res.status(500).send({ message: err.message });
  }
};
