const router = require('express').Router();

const Albums = require('../views/entries/Albums');// уточнить

const renderTemplate = require('../lib/renderTemplate');

const { Albums } = require('../db/models');// уточнить
const { User } = require('../db/models');// уточнить
const { Right } = require('../db/models');// уточнить

// создание записи в таблице прав
router.post('/', async (req, res) => {
  try {
    if (req?.app.locals.userId === Albums.userId) {// если текущий юзер хозяин альбома
      const newRight = await AccessRight.create({
        // из инпутов формы альбом и кому права на просмотр
        userId: req.body.albumId,// уточнить
        albumId: req.body.userId,// уточнить
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



router.get('/albums', async (req, res) => {// страница с альбомами
  try {
    const right = await AccessRight.findAll({ where: { userId: req?.app.locals.userId } });
    if (right) {
      const album = await Albums.findAll({ where: { id: right.albumId } });
      renderTemplate(Albums, { album, user: req.app.locals.userId }, res);
    } else {
      res.send('Sorry, there is nothing to view');
    }
  }
});

module.exports = router;