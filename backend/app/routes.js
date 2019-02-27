const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const uploadController = require('./controllers/uploadController');

router.use((req, res, next) => {
  try {
    const userAgent = req.get('user-agent').split('/')[0];
    if (req.query.api === 'true' || userAgent === 'curl') {
      req.url = `api${req.url}`
      return next();
    }

    req.url = `public${req.url}`
    next();
  } catch(error) {
    next(error);
  }
});

if (process.env.NODE_ENV === 'development') {
  router.use('public', (req, res) => res.send('DEVELOPMENT ENV'));
} else {
  router.use('public', 
    express.static(`{$__dirname}/public/`, {fallthrough: true}),
    express.static(`${__dirname}/public/configz-frontend`, {fallthrough: true}),
    (req, res) => res.sendFile(`${__dirname}/public/configz-frontend/index.html`)
  );
}

router.get('api/files', authController.authenticate, userController.getAllFiles);
router.get('api/:file', authController.authenticate, userController.getFile);
router.post('api/:file', authController.authenticate, uploadController.upload, userController.addFile);
router.patch('api/:file', authController.authenticate, uploadController.upload, userController.updateFile);
router.delete('api/:file', authController.authenticate, userController.deleteFile);

router.post('api', authController.register);

// Essentially api 404
router.use('api', (req, res) => {
  const directions = (
`------------------------------------------------------------
Welcome to configz.me!
------------------------------------------------------------

# Registering
curl -u -X POST <username> configz.me

# Uploading Files
curl -u <username> -F file=@<your file> configz.me/<filename>

# Getting files
curl -u <username> configz.me/<filename>

# Listing files
curl -u <username> configz.me/files

# updating files
curl -u <username> -X PATCH -F file=@<your file> configz.me/<filename>

# Deleting files
curl -u <username> -X DELETE configz.me/<filename>
------------------------------------------------------------

`);

  res.send(directions)
});

router.use('*', (req, res) => {
  res.status(404).send('404 not found');
});

module.exports = router;

