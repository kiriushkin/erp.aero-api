import express from 'express';
import signupControllers from './signup.controllers.js';

const router = express.Router();

router.post('/', signupControllers.register);

export default router;
