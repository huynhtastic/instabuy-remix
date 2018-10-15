//this is a model file for posts
let mongoose = require('mongoose');

//setup database: we can do this in a separate database.js file
const server = '127.0.0.1:27017';
const database = 'admin';
const user = 'admin';
const password = 'skywall34'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let PostSchema = new mongoose.Schema({ //Define a schema
  post_name: String,
  post_pic_link: String,
  post_date: Date,
  post_location: {
    loc: {
        type: { type: String },
        coordinates: [],
    }
  }
});

//PostSchema.index({ "loc": "2dsphere" });

//export schema as a mongoose model
module.exports = mongoose.model('Post', PostSchema);
