import express from 'express';
import signupRoutes from './signup/signup.routes.js';
import signinRoutes from './signin/signin.routes.js';

const router = express.Router();

router.use('/signup', signupRoutes);
router.use('/signin', signinRoutes);

export default router;
