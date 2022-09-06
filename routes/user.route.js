const route = require('express').Router();

const renderTemplate = require('../lib/renderReactModule');

const LoginForm = require('../views/LoginForm');
const RegisterForm = require('../views/RegisterForm');
const Main = require('../views/Main');
//const MyAlboms = require('../views/MyAlboms');

const { User } = require('../db/models');

// регистрация
route.get('/register', (req, res) => {
  renderTemplate(RegisterForm, null, res);
});

route.post('/register', async (req, res) => {
  const { password, email, firstname, lastname } = req.body;
  console.log(req.body);
  const user = await User.create({
    password,
    email,
    firstname,
    lastname,
  });
  console.log(user);
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
    if (req.body.password === user.password) {
      req.session.email = user.email;
      req.session.userId = user.id;
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
route.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    renderTemplate(Main, user.toJSON(), res);
  } else {
    res.redirect('/');
  }
});

module.exports = route;
