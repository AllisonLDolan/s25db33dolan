const mongoose = require("mongoose")
const creatureSchema = mongoose.Schema({
  creature: String,
  habitat: String,
  lifespan: Number
})
module.exports = mongoose.model("Creature",
  creatureSchema)
