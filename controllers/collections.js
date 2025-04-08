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
    
exports.creature_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Creature.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send({"error": `document for id ${req.params.id} not found`});
    }
};

exports.creature_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature create POST');
};

exports.creature_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Creature delete DELETE ' + req.params.id);
};

exports.creature_update_put = async function(req, res) {    
    try {
      let toUpdate = await Creature.findById(req.params.id);
      
      if (req.body.creature) toUpdate.creature = req.body.creature;
      if (req.body.habitat) toUpdate.habitat = req.body.habitat;
      if (req.body.lifespan) toUpdate.lifespan = req.body.lifespan;
  
      if (req.body.checkboxsale) {
        toUpdate.sale = true;
      } else {
        toUpdate.sale = false;
      }
  
      let result = await toUpdate.save();
      console.log("Success: " + result);
      res.send(result);
    } catch (err) {
      res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
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
    