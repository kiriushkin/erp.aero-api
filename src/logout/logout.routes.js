import express from 'express';
import logoutControllers from './logout.controllers.js';

const router = express.Router();

router.get('/', logoutControllers.logout);

export default router;
