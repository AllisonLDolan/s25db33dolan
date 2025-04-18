const mongoose = require("mongoose")
const creatureSchema = mongoose.Schema({
  creature: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  habitat: {
    type: String,
    required: true,
    enum: ['Forest', 'Ocean', 'Desert', 'Grassland', 'Mountains', 'Urban']
  },
  lifespan: {
    type: Number,
    required: true,
    min: 0,
    max: 5000
  }
})
module.exports = mongoose.model("Creature", creatureSchema)
