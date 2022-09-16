import express from 'express';
import multer from 'multer';
import fileControllers from './file.controllers.js';

const upload = multer({ dest: './public/documents/' });

const router = express.Router();

router.post('/upload', upload.single('file'), fileControllers.upload);
router.get('/list', fileControllers.list);

export default router;
