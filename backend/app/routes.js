const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

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

if (process.env.BACKEND_ONLY_MODE) {
  router.use('public', (req, res) => {
    res.send(
    `<h1>Welcome to Configz.me</h1>
      <p>run <span style="background:black;color:white;">curl configz.me</span> in the terminal for directions</p>
    `);
  });
} else if (process.env.NODE_ENV === 'development') {
  router.use('public', (req, res) => res.send('DEVELOPMENT ENV'));
} else {
  router.use('public', 
    express.static(`{$__dirname}/public/`, {fallthrough: true}),
    express.static(`${__dirname}/public/configz-frontend`, {fallthrough: true}),
    (req, res) => res.sendFile(`${__dirname}/public/configz-frontend/index.html`)
  );
}

router.use('api/files', authController.authenticate, userController.getAllFiles);
router.get('api/:file', authController.authenticate, userController.getFile);
router.post('api/:file', authController.authenticate, upload.single('file'), userController.addFile);
router.use('api/:file/update', authController.authenticate, upload.single('file'), userController.updateFile);
router.use('api/:file/destroy', authController.authenticate, userController.deleteFile);

router.post('api', authController.register);

// Essentially api 404
router.use('api', (req, res) => {
  const directions = (
`------------------------------------------------------------
Welcome to configz.me!
------------------------------------------------------------

# Registering
curl -u <username> -X POST configz.me

# Uploading Files
curl -u <username> -F file=@<your file> configz.me/<filename>

# Getting files
curl -u <username> configz.me/<filename>

# Listing files
curl -u <username> configz.me/files

# updating files
curl -u <username> -F file=@<your file> configz.me/<filename>/update

# Deleting files
curl -u <username> configz.me/<filename>/destroy
------------------------------------------------------------

`);

  res.send(directions)
});

router.use('*', (req, res) => {
  res.status(404).send('404 not found');
});

module.exports = router;

