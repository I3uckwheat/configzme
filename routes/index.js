const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('hello world, its me');
});

module.exports = router;