let mongoose = require('mongoose');

//setup database: we can do this in a separate database.js file
const server = '127.0.0.1:27017';
const database = 'admin';
const user = 'admin';
const password = 'skywall34'

mongoose.connect(`mongodb://${user}:${password}@${server}/${database}`);

let AccountScema = new mongoose.Schema({ //Define a schema
  name: String,
  username: String,
  email: {
    //assigning an object as a value
    //allow for authorization checking
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    unique: true
  }
})

//export schema as a mongoose model
module.exports = mongoose.model('Account', AccountScema);
