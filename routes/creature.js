var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('creature', { title: 'Search Results' });
});

const mongoose = require("mongoose")
const creatureSchema = mongoose.Schema({
  creature: String,
  habitat: String,
  lifespan: Number
})
module.exports = mongoose.model("Creature",
  creatureSchema)

module.exports = router;

