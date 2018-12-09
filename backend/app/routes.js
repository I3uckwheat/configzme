const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

router.get('/*', (req, res, next) => {
  const userAgent = req.get('user-agent').split('/')[0];
  if (req.query.api === 'true' || userAgent === 'curl') {
    req.url = `api${req.url}`
    return next();
  }

  req.url = `public${req.url}`
  next();
});

router.use('public', 
  express.static(`${__dirname}/public/`, {fallthrough: true}),
  (req, res) => res.sendFile(`${__dirname}/public/configz-frontend/index.html`, {fallthrough: true})
);

router.get('api', (req, res) => res.send('console directions'));
router.post('api', userController.register);
router.get('api/files', authController.authenticate, userController.getAllFiles);
router.get('api/:file', authController.authenticate, userController.getFile);
router.post('api/:file', authController.authenticate, upload.single('file'), userController.addFile);
router.patch('api/:file', authController.authenticate, upload.single('file'), userController.updateFile);
router.delete('api/:file', authController.authenticate, userController.deleteFile);

module.exports = router;