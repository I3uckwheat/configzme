const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

exports.upload = (req, res, next) => {
  upload.single('file')(req, res, err => {
    if (err) {
      return res.send('');
    }

    next();
  });
}

