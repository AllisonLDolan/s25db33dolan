var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var creature_controller = require('../controllers/collections');


router.get('/', api_controller.api);

router.post('/creature', creature_controller.creature_create_post);

router.delete('/creature/:id', creature_controller.creature_delete);

router.put('/creature/:id', creature_controller.creature_update_put);

router.get('/creature/:id', creature_controller.creature_detail);

router.get('/detail/:id', creature_controller.creature_view_one_Page);

router.get('/creature', creature_controller.creature_list);

module.exports = router;

exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"creature", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
};
