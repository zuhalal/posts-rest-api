import express from "express"

import { getAllPost, getAPost, postAPost, deletePost, updatePost } from '../controllers/postController.js'

const router = express.Router()

// Get All
router.get('/', getAllPost)

// Get Specific Post
router.get('/:postId', getAPost)

// Post post
router.post('/',postAPost)

// Delete post
router.delete('/:postId', deletePost)

// Update Post
router.patch('/:postId', updatePost)

export default router