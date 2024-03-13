const express = require("express");
const router = express.Router();

// Import Controller
const { createComments } = require("../controllers/CommentsController");
const { createPost, getAllPosts } = require("../controllers/PostController");
const { likePost, unlikePost } = require("../controllers/likeControllers");

// Mapping Create
router.post("/comments/create", createComments);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

// Export
module.exports = router;
