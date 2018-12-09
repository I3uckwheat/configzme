const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

router.get('/*', (req, res, next) => {
  const authHeader = req.get('Authorization');
  const userAgent = req.get('user-agent').split('/')[0];

  if (userAgent !== 'curl') return res.sendFile(`${__dirname}/public${req.url}`);
  if (!authHeader) return res.send('info');
  return next();
});

router.post('/', userController.register);
router.get('/files', authController.authenticate, userController.getAllFiles);
router.get('/:file', authController.authenticate, userController.getFile);
router.post('/:file', authController.authenticate, upload.single('file'), userController.addFile);
router.patch('/:file', authController.authenticate, upload.single('file'), userController.updateFile);
router.delete('/:file', authController.authenticate, userController.deleteFile);

module.exports = router;