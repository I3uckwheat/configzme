exports.initialize = async (req, res) => {
  if (!req.session.user) {
    return res.json({
      username: undefined,
    });
  }
  return res.json(req.session.user);
};
