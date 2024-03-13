const Post = require("../models/postModel");


exports.createPost = async(req,res)=>{
  try{
       const {title, body} = req.body;
       const post = new Post({
          title,body,
       });
       const savedPost = await post.save();
       res.json({
         post:savedPost,
       })
  }
  catch(error){

    return res.status(400).json({
      error :"Error while creating post",
    })

  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("likes").populate("comments").exec();

    res.json({
      posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error,
    });
  }
};

































// // import model

// const Post = require("../models/postModel");
// const Comments = require("../models/commentModel");

// //business logic

// exports.createPost = async (req, res) => {
//   try {
//     // fetch data from req body
//     console.log("req body =--------- ", req.body);
//     const { title, body } = req.body;
//     //create a comments object
//     const post = new Post({
//       title,
//       body,
//     });
//     //save the new comment into the database
//     const savedPost = await post.save();

//     res.json({
//       post: savedPost,
//     });
//   } catch (error) {
//     console.log("error ------- ", error);
//     return res.status(500).json({
//       error: error,
//     });
//   }
// };
