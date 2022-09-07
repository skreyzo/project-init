const route = require('express').Router();

const { Album } = require('../db/models');

const renderTemplate = require('../lib/renderReactModule');

const Albums = require('../views/Album');

route.get('/', async (req, res) => {
    console.log('gfhgfh')
  try {
    //const albums = await Album.findAll({ raw: true });
    // console.log('tasks =====>', tasks);
    renderTemplate(Albums, {}, res);
  } catch (error) {
    console.error(error);
  }
});
// /tasks/form
route.post('/', async (req, res) => {
  const { title } = req.body;
   try {
    const newAlb = await Album.create({ userid: req.session.userId, title });
    //res.json(newAlb);
  } catch (error) {
    console.error('RRRRRR', error);
  }
});
/* // /tasks/delete
route.delete('/delete', async (req, res) => {
  // console.log(req.body);
  try {
    const { id } = req.body;
    await Task.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
}); */

// route.post('/addTask', validateForm, async (req, res) => {
//   const { title, description } = req.body;
//   // console.log('res.app.locals', res.app.locals);
//   try {
//     await Task.create({ title, description });
//   } catch (error) {
//     console.error('RRRRRR', error);
//   }
//   res.redirect('/tasks');
// });

/* route.get('/:id', async (req, res) => {
  console.log(req.params);
  try {
    const task = await Task.findByPk(req.params.id, { raw: true });
    renderTemplate(TaskDetail, { task }, res);
  } catch (error) {
    console.error(error);
  }
}); */

module.exports = route;

