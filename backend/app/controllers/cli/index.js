exports.handleRegisterSuccess = (req, res, next) => {
  res.status(201).send(`Successfully Registered as ${req.body.username}\n`);
}

exports.badCommand = (req, res, next) => {
  res.status(400).send("Invalid command, run 'curl https://configz.me' for directions\n");
}