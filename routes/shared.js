const { Album, AccessRight, Photo, User } = require('../db/models');
// это вставка в файл album.route вместо первой ручки
route.get('/', async (req, res) => {
  try {
    const albums = await Album.findAll({
      where: { userid: req.session?.userId },
      raw: true,
    });
    // find the albums shared for current user
    const {albumid} = await AccessRight.findAll({
      where: { userid: req.session?.userId },
      raw: true,
    });
    console.log(albumid)
    
    const userAlbum = await User.findByPk(req.session?.userId);
    renderTemplate(Albums, { albums, userAlbum, albumid }, res);
  } catch (error) {
    console.error(error);
  }
});
// это вставка в файл album.route вместо первой ручки