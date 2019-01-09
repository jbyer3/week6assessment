const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const AlbumSchema = new mongoose.Schema({
  title: String,
  artist: String,
  year: Date,
  genre: String
})

AlbumSchema.plugin(mongoosePaginate)
const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;