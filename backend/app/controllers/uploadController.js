const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

exports.upload = (req, res, next) => {
  // TODO - handle wrong upload name
  // TODO - handle types of files
  upload.single('file')(req, res, next);
}

