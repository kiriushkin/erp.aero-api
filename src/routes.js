import express from 'express';
import signupRoutes from './signup/signup.routes.js';
import signinRoutes from './signin/signin.routes.js';
import fileRoutes from './file/file.routes.js';
import infoRoutes from './info/info.routes.js';
import logoutRoutes from './logout/logout.routes.js';
import auth from './middlewares/auth.middleware.js';

const router = express.Router();

router.use('/signup', signupRoutes);
router.use('/signin', signinRoutes);
router.use('/file', auth, fileRoutes);
router.use('/info', auth, infoRoutes);
router.use('/logout', auth, logoutRoutes);

export default router;
