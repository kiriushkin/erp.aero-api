import express from 'express';
import multer from 'multer';
import fileControllers from './file.controllers.js';

const upload = multer({ dest: './public/documents/' });

const router = express.Router();

router.post('/upload', upload.single('file'), fileControllers.uploadFile);
router.get('/list', fileControllers.getList);
router.get('/download/:id', fileControllers.downloadFile);
router.put('/update/:id', upload.single('file'), fileControllers.updateFile);
router.delete('/delete/:id', fileControllers.deleteFile);
router.get('/:id', fileControllers.getFile);

export default router;
