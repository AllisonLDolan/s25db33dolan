var Creature = require("../models/creature");
 
exports.creature_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature list');
};

exports.creature_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature detail: ' + req.params.id);
};

exports.creature_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature create POST');
};

exports.creature_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature delete DELETE ' + req.params.id);
};
exports.creature_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature update PUT' + req.params.id);
};
