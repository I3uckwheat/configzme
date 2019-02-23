const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

router.use((req, res, next) => {
  const userAgent = req.get('user-agent').split('/')[0];
  if (req.query.api === 'true' || userAgent === 'curl') {
    req.url = `api${req.url}`
    return next();
  }

  req.url = `public${req.url}`
  next();
});

router.get('api/test', (req, res) => {
  res.send('test success');
})

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
router.post('api/:file', authController.authenticate, upload.single('file'), userController.addFile);
router.patch('api/:file', authController.authenticate, upload.single('file'), userController.updateFile);
router.delete('api/:file', authController.authenticate, userController.deleteFile);

// TODO - combine these requests to remove the need for `-X POST` on register
router.post('api', userController.register);
router.get('api', (req, res) => {
  const directions = (
`------------------------------------------------------------
Welcome to configz.me!
------------------------------------------------------------

# Registering
curl -u -X POST <username> configz.me

# Uploading Files
curl -u <username> --form upload=@<your file> configz.me/<filename>

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

//  TODO - API 404
router.use('*', (req, res) => {
  res.status(404).send('404 not found');
});

module.exports = router;

