const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const articleschema = new Schema({
    title: {
      type: String
      // required: true,
      // unique: true
    },
    content: {
      type: String
      // required: true,
      // unique: true
    },
    image: {
      type: String
      // required: true,
      // unique: true
    },
    create_at:{
      type:Date, default:Date.now
    },
});

module.exports = mongoose.model('Article', articleschema);
