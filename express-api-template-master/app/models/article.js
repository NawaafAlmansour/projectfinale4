const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const articlesschema = new Schema({
    title:{
      type:String
    },
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // }
    content:{
      type:String
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
     },
     image:{
       type:String
     },
    top:{
      type:Boolean, default:false
     },
    reply_count:{
       type:Number, default:0
     },
    visit_count:{
       type:Number, default:0
     },
    collect_count:{
       type:Number, default:0
     },
    create_at:{
      type:Date, default:Date.now
    },
    update_at:{
      type:Date, default:Date.now
    },
    last_reply:{
       type:Schema.ObjectId
     },
    last_reply_at:{
       type:Date, default:Date.now
     },
    content_is_html:{
      type:Boolean
    }
});

module.exports = mongoose.model('Articles', articlesschema);
