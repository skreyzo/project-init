const route = require('express').Router();

const renderTemplate = require('../lib/renderReactModule');

const LoginForm = require('../views/LoginForm');
const RegisterForm = require('../views/RegisterForm');
//const MyAlboms = require('../views/MyAlboms');

// регистрация
route.get('/register', (req, res) => {
  renderTemplate(RegisterForm, null, res);
});

route.post('/register', async (req, res) => {
  const { password, email, name, surname } = req.body;
  const user = await User.create({
    password,
    email,
    name,
    surname,
  });
  req.session.username = user.name;
  req.session.email = user.email;
  req.session.userid = user.id;
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
    if (req.body.password === user.password) {
      req.session.email = user.email;
      req.session.userid = user.id;
      res.redirect(`/user/${user.id}`);
    } else {
      return res.send('wrong password');
    }
  } else {
    return res.send('wrong login');
  }
});

// кнопочка логаут - убьёт текущую сессию
route.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// поиск на юзера в бд
// route.get('/:id', async (req, res) => {
//   const user = await User.findByPk(req.params.id);
//   if (user) {
//     renderTemplate(/*MyAlboms*/, user.toJSON(), res);
//   } else {
//     res.redirect('/');
//   }
// });

module.exports = route;
