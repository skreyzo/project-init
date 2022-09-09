const route = require('express').Router();

const { Album, AccessRight, Photo, User } = require('../db/models');

const renderTemplate = require('../lib/renderReactModule');

const multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

const Albums = require('../views/Album');
const Upload = require('../views/Upload');
const Myphoto = require('../views/Myphoto');

route.get('/', async (req, res) => {
  try {
    const albumsUser = await Album.findAll({
      where: { userid: req.session?.userId },
      raw: true,
    });
    const albumsAll = await Album.findAll({
      raw: true,
    });
    // find the albums shared for current user
    const albumIdShared = await AccessRight.findAll({
      where: { userid: req.session?.userId },
      raw: true,
    });

    const resultAlbumsAll = albumsAll.map((el) => el.id);
    const resultalbumIdShared = albumIdShared.map((el) => el.albumid);
    const albumShared = albumsAll.filter((el) => resultalbumIdShared.includes(el.id))

    const user = await User.findByPk(req.session?.userId);
    renderTemplate(Albums, { albumsUser, user, albumShared }, res);
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
  console.log('Наш консоль', req.body);
  const { value, id } = req.body;

  try {
    // найти по имени человека в базе
    const [foundPeople] = await User.findAll({
      where: { email: value },
      raw: true,
    });
    // console.log('Наш hero', foundPeople.id)
    //достать нужный альбом
    const sharing = await Album.findByPk(id);
    // console.log(sharing)

    // и посмотреть кто хозяин
    if (req.session?.userId === sharing.userid) {
      // если текущий юзер хозяин альбома
      const newRight = await AccessRight.create({
        // из инпутов формы альбом и кому права на просмотр
        albumid: sharing.id, // уточнить
        userid: foundPeople.id, // уточнить
      });

      res.sendStatus(200); // уточнить страницу
    } else {
      renderTemplate(
        Error,
        {
          message: 'Дать доступ может только автор',
          error: {},
        },
        res
      );
    }
  } catch (error) {
    console.error(error);
    renderTemplate(
      Error,
      {
        message: 'Не удалось добавить запись в базу данных.',
        error: {},
      },
      res
    );
  }
});

route.get('/:photoid', async (req, res) => {
  try {
    //console.log(req.params.photoid)
    const photoId = req.params.photoid;
    const photos = await Photo.findAll({
      where: { albumid: req.params.photoid },
      raw: true,
    });
    const userAlbum = await User.findByPk(req.session?.userId);
    renderTemplate(Myphoto, { photoId, photos, userAlbum }, res);
    //console.log(photos)
  } catch (error) {
    console.error('RRRRRR', error);
  }
});

route.post(
  '/:photoid',
  upload.single('photo'),
  async function (req, res, next) {
    //console.log('путь========>', req.file); // этот путь к фото надо загрузить в БД
    try {
      //const thisAlbum = await Album.findByPk(req.params.id, { raw: true });

      const { path } = req.file;

      const { comment } = req.body;
      await Photo.create({
        albumid: req.params.photoid,
        addres: path.slice(6),
        comment: comment,
      });
      res.send('загрузил');
      // res.redirect(`/albom/${id}`);
    } catch (error) {
      console.log(error);
    }
    // req.file - файл `avatar`
    // req.body сохранит текстовые поля, если они будут
  }
);

module.exports = route;

//! удалить альбом
route.delete('/delete', async (req, res) => {
  //console.log(req.body);
  try {
    const { id } = req.body;
    await Album.destroy({ where: { id } });
    //res.send('OKKKKKKKKKKKKKKKKKKKKKK')
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

//! удалить фото
route.delete('/fotodelete', async (req, res) => {
  console.log('kggygygy', req.body);
  try {
    const { id } = req.body;
    await Photo.destroy({ where: { id } });
    //res.send('OKKKKKKKKKKKKKKKKKKKKKK')
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});
