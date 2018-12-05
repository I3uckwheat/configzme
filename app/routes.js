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

router.post('/:file', authController.authenticate, upload.single(), userController.addFile);

router.get('/:file', authController.authenticate, (req, res) => {
  res.send('authenticated');
});

module.exports = router;