var express = require('express');
const creature_controlers= require('../controllers/collections');
var router = express.Router();

/* GET home page. */
router.get('/', creature_controlers.creature_view_all_Page );
module.exports = router;

