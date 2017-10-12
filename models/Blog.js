var mongoose = require('mongoose');
var Schema = mongoose.Schema


console.log('======= masuk models user');


var blogSchema = mongoose.Schema({
  title: { type: String},
  content: { type: String},
  category: { type: String},
  author: [{ type: Schema.ObjectId, ref: 'User' }]
},
{ timestamps: true});

var Blog = mongoose.model('Blogss', blogSchema);

module.exports = Blog
