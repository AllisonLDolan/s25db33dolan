var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('creature', { title: 'Search Results' });
});

const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("Costume",
costumeSchema)

module.exports = router;

