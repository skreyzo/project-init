const router = require('express').Router();

const Profile = require('../views/Profile');// уточнить

const renderTemplate = require('../lib/renderReactModule');

const { Album } = require('../db/models');// уточнить
// const { User } = require('../db/models');// уточнить
const { AccessRight } = require('../db/models');// уточнить

// создание записи в таблице прав
router.post('/', async (req, res) => {
  try {//достать нужный альбом 
    const sharing = Album.findByPk(req.body.albumId);
    // и посмотреть кто хозяин
    if (req.session?.userId === sharing.userid) {// если текущий юзер хозяин альбома
      const newRight = await AccessRight.create({
        // из инпутов формы альбом и кому права на просмотр
        userid: req.body.albumId,// уточнить
        albumid: req.body.userId,// уточнить
      }, {
        returning: true,
        plain: true,
      });
      res.redirect('/');// уточнить страницу
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
;

// удаление записи в таблице прав
// router.delete('/:id', async (req, res) => {
//   try {
//     const entry = await AccessRight.findOne({ where: { id: req.params.id, } });
//     if (req.app.locals.UserId === entry.UserId) {
//       await AccessRight.destroy({ where: { id: req.params.id } });
//       res.json({ isDeleteSuccessful: true });
//     } else {
//       res.json({
//         isDeleteSuccessful: false,
//         errorMessage: 'Удалять права могут только авторы',
//       });
//     }
//   } catch (error) {
//     res.json({
//       isDeleteSuccessful: false,
//       errorMessage: 'Не удалось удалить запись из базы данных.',
//     });
//   }
// });



router.get('/', async (req, res) => {// страница с альбомами
  try {
    // выбираем свои альбомы 
    const myAlbums = await Album.findAll({ where: { userid: req.session?.userId } });
    // выбираем разрешенные
    const grantedAlbums = await AccessRight.findAll({ where: { userid: req.session?.userId } }); // деструктурировать?
    if (myAlbums || grantedAlbums) {
      renderTemplate(Profile, { myAlbums, grantedAlbums, user: req.session?.userId }, res);
    } else {
      res.send('Sorry, access denied');
    }
  } catch (error) {
    console.error(error)
    renderTemplate(Error, {
      message: 'Не удалось прочитать  базу данных.',
      error: {},
    }, res);
  }
});



module.exports = router;