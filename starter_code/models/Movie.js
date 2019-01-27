const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  director: String,
  stars: String,
  image: String,
  description: String,
  showtimes: [String]
});

module.exports = mongoose.model('Movie', MovieSchema);
