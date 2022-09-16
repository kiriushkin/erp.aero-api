import express from 'express';
import signupRoutes from './signup/signup.routes.js';
import signinRoutes from './signin/signin.routes.js';
import fileRoutes from './file/file.routes.js';
import auth from './middlewares/auth.middleware.js';

const router = express.Router();

router.use('/signup', signupRoutes);
router.use('/signin', signinRoutes);
router.use('/file', auth, fileRoutes);

export default router;
