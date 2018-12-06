const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

router.get('/', (req, res) => {
  res.send('homepage');
});

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

// routes for username operations
router.post('/', userController.register);
router.get('/files', authController.authenticate, userController.getAllFiles);

router.get('/:file', authController.authenticate, userController.getFile);
router.post('/:file', authController.authenticate, upload.single('file'), userController.addFile);
router.patch('/:file', authController.authenticate, upload.single('file'), userController.updateFile);
router.delete('/:file', authController.authenticate, userController.deleteFile);

module.exports = router;