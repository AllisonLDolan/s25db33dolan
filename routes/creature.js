var express = require('express');
const creature_controller= require('../controllers/collections');
var router = express.Router();

const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    res.redirect("/login");
  };
/* GET home page. */
router.get('/', creature_controller.creature_view_all_Page );

router.get('/detail', creature_controller.creature_view_one_Page);

router.get('/create', creature_controller.creature_create_Page);

router.get('/update', secured, creature_controller.creature_update_Page);

router.get('/delete', creature_controller.creature_delete_Page);
    

module.exports = router;
