const mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var winnerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('winner', winnerSchema);
