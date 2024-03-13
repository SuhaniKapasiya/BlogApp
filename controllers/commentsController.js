// import model

const Post = require("../models/postModel");
const Comments = require("../models/commentModel");


//business logic

exports.createComments = async (req, res)=>{

    try{
      // fetch data from req body
      const { post, user, body } = req.body;
      //create a comments object
      const comment = new Comments({
        post, user,body
      });
      //save the new comment into the database
      const savedComment = await comment.save();

      //find the post by ID,add the new commnet to its comments
      const updatePost = await Post.findByIdAndUpdate(post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )

    .populate("comments")//populate the comments array with comments documents
    .exec();

    res.json({
        post:updatePost,
    });


    }
    

     catch(error){

        console.log("eoorr  - ",error);
        return res.status(400).json({
            
            error:error,
            
        });
     }

}





