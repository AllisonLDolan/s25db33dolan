var Creature = require("../models/creature");

exports.creature_list = async function(req, res) {
    try{
        theCreature = await Creature.find();
        res.send(theCreature);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
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

exports.creature_view_all_Page = async function(req, res) {
    try{
        theCreature = await Creature.find();
        res.render('creature', { title: 'Creature Search Results', results: theCreature });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.creature_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Creature();
    document.creature = req.body.creature;
    document.habitat = req.body.habitat;
    document.lifespan = req.body.lifespan;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
    