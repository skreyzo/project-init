const { User } = require('../db/models');

const checkUserInBase = async (req, res, next) => {
    try {
      const { firstname } = req.body;
      console.log(req.body);
      const findUser = await User.findOne({ where: { firstname } });
      console.log(firstname);
      if (findUser) {
        res.redirect('/');        
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
    }
  };

  module.exports = { checkUserInBase };
