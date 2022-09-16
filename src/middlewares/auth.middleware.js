import jwt from 'jsonwebtoken';

const { ACCESS_TOKEN_SECRET } = process.env;

export default (req, res, next) => {
  try {
    const header = req.get('Authorization');

    if (!header)
      return res
        .status(401)
        .send({ message: 'Authorization header is missing.' });

    const token = header.split(' ')[1];

    req.decode = jwt.verify(token, ACCESS_TOKEN_SECRET);

    next();
  } catch (err) {
    if (err.message === 'invalid signature')
      return res.status(401).send({ message: 'Provided token is invalid.' });

    console.error(err);
    res.status(500).send({ message: err.message });
  }
};
