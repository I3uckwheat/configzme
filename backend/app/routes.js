const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const initController = require('./controllers/initController');
const directionController = require('./controllers/directionController');

const cliUserAgents = ['curl', 'Wget'];


router.use((req, res, next) => {
  try {
    const userAgent = req.get('user-agent').split('/')[0];
    if (req.query.api === 'true' || cliUserAgents.includes(userAgent)) {
      req.url = `api${req.url}`
      res.locals.userAgent = userAgent;
      return next();
    } else {
      req.url = `public${req.url}`
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


router.get('api/init', initController.initialize);
router.post('api/login', authController.login);
router.delete('api/logout', authController.logout);
router.post('api/register', authController.register);
router.get('api', directionController.showDirections);
// router.use('api/files', authController.authenticate, userController.getAllFiles);
// router.get('api/:file', authController.authenticate, userController.getFile);
// router.post('api/:file', authController.authenticate, upload.single('file'), userController.addFile);
// router.use('api/:file/update', authController.authenticate, upload.single('file'), userController.updateFile);
// router.use('api/:file/destroy', authController.authenticate, userController.deleteFile);


// // Essentially api 404

router.use('*', (req, res) => {
  res.status(404);
});

module.exports = router;

