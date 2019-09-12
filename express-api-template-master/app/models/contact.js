const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const contactschema = new Schema({
    name: {
      type: String
      // required: true,
      // unique: true
    },
    phone: {
      type: Number
      // required: true,
      // unique: true
    },
    email: {
      type: String
      // required: true,
      // unique: true
    },
    massage:{
      type:String
      // required: true,
      // unique: true
    },
    create_at:{
      type:Date, default:Date.now
    },
});

module.exports = mongoose.model('Contact', contactschema);
