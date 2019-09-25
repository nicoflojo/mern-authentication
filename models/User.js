const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  pasword: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);

