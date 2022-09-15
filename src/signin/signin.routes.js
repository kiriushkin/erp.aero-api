import express from 'express';
import signinControllers from './signin.controllers.js';

const router = express.Router();

router.post('/', signinControllers.login);
router.post('/new_token', signinControllers.refreshToken);

export default router;
