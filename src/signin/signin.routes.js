import express from 'express';
import signinControllers from './signin.controllers.js';

const router = express.Router();

router.post('/', signinControllers.login);

export default router;
