const route = require('express').Router();

const renderTemplate = require('../lib/renderReactModule');

const Multer = require('../views/Multer');

// const { User } = require('../db/models');

// регистрация
route.get('/', (req, res) => {
  renderTemplate(Multer, null, res);
});

module.exports = route;
