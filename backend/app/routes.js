const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const initController = require('./controllers/initController');
const directionController = require('./controllers/directionController');
const cli = require('./controllers/cli');

const cliUserAgents = ['curl', 'Wget'];


router.use((req, res, next) => {
  try {
    const userAgent = req.get('user-agent').split('/')[0];
    if(cliUserAgents.includes(userAgent) || req.query.cli === 'true') {
      req.url = `cli${req.url}`;
      res.locals.userAgent = userAgent;
      return next();
    } else if (req.query.api === 'true') {
      req.url = `api${req.url}`;
      return next();
    } else {
      req.url = `public${req.url}`;
      next();
    }
  } catch(error) {
    next(error);
  }
});

// router.use('public', 
//   express.static(`{$__dirname}/public/`, {fallthrough: true}),
//   express.static(`${__dirname}/public/configz-frontend`, {fallthrough: true}),
//   (req, res) => res.sendFile(`${__dirname}/public/configz-frontend/index.html`)
// );


router.get('api', directionController.showDirections);
router.get('api/init', initController.initialize);
router.post('api/login', authController.login);
router.delete('api/logout', authController.logout);
router.post('api/register', authController.register, authController.login);

router.get('api/files', authController.ensureAuthentication, userController.getAllFiles);
router.get('api/:file', authController.ensureAuthentication, userController.getFile);
router.post('api/:file', authController.ensureAuthentication, upload.single('file'), userController.addFile);
router.put('api/:file', authController.ensureAuthentication, upload.single('file'), userController.upsertFile);
router.delete('api/:file', authController.ensureAuthentication, userController.deleteFile);


/**
 * CLI
 */
// Show directions
router.get('cli', directionController.showDirections);

// register
router.post('cli', authController.handleBasicAuth, authController.register, cli.handleRegisterSuccess);

// Route gaurd
router.use('cli', authController.authenticateByHeaders);

// Get single file
router.get('cli/:file', userController.getFileCli);

// Upload file
router.post('cli/:file',
  upload.single('file'),
  userController.addFile
);

// Updating a file
router.post('cli/:file/update', 
  upload.single('file'), 
  userController.upsertFile
);

// Deleting a file
router.get('cli/:file/destroy', 
  userController.deleteFile
);


router.use('cli', cli.badCommand);


// // Essentially api 404

router.all('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = router;

