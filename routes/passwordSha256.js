const sha256 = require('sha256');

route.post('/register', async (req, res) => {
  const { password, email, firstname, lastname } = req.body;
  const user = await User.create({
    password: sha256(password),// changed
    email,
    firstname,
    lastname,
  });
  req.session.firstname = user.firstname;
  req.session.email = user.email;

  req.session.userId = user.id;
  res.redirect('/user/login');
});

// авторизация
route.get('/login', (req, res) => {
  renderTemplate(LoginForm, {}, res);
});

route.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    if (sha256(password) === user.password) {// changed
      req.session.email = user.email;
      req.session.userId = user.id;
      req.session.firstname = user.firstname;
      res.redirect(`/album`);
    } else {
      return res.send('wrong password');
    }
  } else {
    return res.send('wrong login');
  }
});
