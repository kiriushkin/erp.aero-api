import express from 'express';
import infoControllers from './info.controllers.js';

const router = express.Router();

router.get('/', infoControllers.getId);

export default router;
