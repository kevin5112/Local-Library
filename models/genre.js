const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: { type: String, minLength: 3, maxLength: 100 },
});

// Virtual for Genre url
GenreSchema.virtual('url').get(function () {
  // does not use point because need to reference 'this' object
  return `/catalog/users/${this._id}`;
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);
