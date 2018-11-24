const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('homepage');
});

const userController = require('./controllers/userController');

// routes for username operations
router.post('/', userController.register);

router.get('/:username', (req, res) => {
  res.send(`Route for ${req.params.username}'s config/settings (UI)`);
});

router.post('/:username', userController.authenticate, (req, res) => {
  res.send('authenticated');
});

router.delete('/:username', (req, res) => {
  res.send(`Route for deleting a username at the name of ${req.params.username}`)
});

// routes for file operations
router.get('/:username/:file', (req, res) => {
  res.send(`Route for "${req.params.username}'s" "${req.params.file}" file`);
});

router.put('/:username/:file', (req, res) => {
  res.send(`Rotue for uploading a new file for ${req.params.username}, with the name of ${req.params.file}`);
});

router.delete('/:username/:file', (req, res) => {
  res.send(`Route for deleting a file at the name of ${req.paramsfile}`);
});

module.exports = router;