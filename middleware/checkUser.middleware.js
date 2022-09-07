const checkUser = (req, res, next) => {
  if (req.session.email) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = checkUser;


