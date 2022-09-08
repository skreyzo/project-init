const route = require('express').Router();

const { Album, AccessRight, User } = require('../db/models');

const renderTemplate = require('../lib/renderReactModule');

const Albums = require('../views/Album');

route.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll({ where: { userid: req.session?.userId }, raw: true });
    renderTemplate(Albums, { albums }, res);
  } catch (error) {
    console.error(error);
  }
});
// /tasks/form
route.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const newAlb = await Album.create({ userid: req.session?.userId, title });
    res.json(newAlb);
  } catch (error) {
    console.error('RRRRRR', error);
  }
});

//! Новая вставка

//! const Profile = require('../views/Profile');// уточнить

// создание записи в таблице прав
route.post('/right', async (req, res) => {
  console.log('Наш консоль', req.body)
  const { value, id } = req.body;
  try { // найти по имени человека в базе
    const [foundPeople] = await User.findAll({ where: { firstname: value }, raw: true })
    // console.log('Наш hero', foundPeople.id)
    //достать нужный альбом
    const sharing = await Album.findByPk(id);
    // console.log(sharing)

    // и посмотреть кто хозяин
    if (req.session?.userId === sharing.userid) {// если текущий юзер хозяин альбома
      const newRight = await AccessRight.create({
        // из инпутов формы альбом и кому права на просмотр
        albumid: sharing.id,// уточнить
        userid: foundPeople.id,// уточнить
      })
      console.log('50=====>', newRight);
      
      res.send('vse ok');// уточнить страницу
    } else {
      renderTemplate(Error, {
        message: 'Дать доступ может только автор',
        error: {},
      }, res);
    }
  } catch (error) {
    console.error(error)
    renderTemplate(Error, {
      message: 'Не удалось добавить запись в базу данных.',
      error: {},
    }, res);
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
    const theAlbum = await Album.findByPk(req.params.id, { raw: true });
    renderTemplate(myPhoto, { theAlbum }, res);
  } catch (error) {
    console.error(error);
  }
}); */

module.exports = route;

