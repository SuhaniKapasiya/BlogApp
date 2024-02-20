const mongoose = require("mongoose");


//router handler

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Like",
    },
  ],
  Comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
   }
  ],

});



//export

module.exports=mongoose.model("Post", postSchema);