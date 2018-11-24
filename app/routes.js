const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('homepage');
});

// routes for user operations
router.post('/', (req, res) => {
  res.send(`Route for creating a new user with username and password, and email`);
});

router.get('/:user', (req, res) => {
  res.send(`Route for ${req.params.user}'s config/settings (UI)`);
});

router.delete('/:user', (req, res) => {
  res.send(`Route for deleting a user at the name of ${req.params.user}`)
});

// routes for file operations
router.get('/:user/:file', (req, res) => {
  res.send(`Route for "${req.params.user}'s" "${req.params.file}" file`);
});

router.put('/:user/:file', (req, res) => {
  res.send(`Rotue for uploading a new file for ${req.params.user}, with the name of ${req.params.file}`);
});

router.delete('/:user/:file', (req, res) => {
  res.send(`Route for deleting a file at the name of ${req.paramsfile}`);
});

module.exports = router;