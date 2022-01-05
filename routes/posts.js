const express = require('express')
const Post = require('../models/Post')

const router = express.Router()

// Get All
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch(err) {
        res.json({message: err})
    }
})

// Get Specific Post
router.get('/:postId', async (req,res)=>{
    try {
        const requestedPost = await Post.findById(req.params.postId)
        res.json(requestedPost)
    } catch(err) {
        res.json({message: err})
    }
})

// Post post
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const save = await post.save()
        res.json(save)
    } catch(err) {
        res.json({message: err})
    }
})

// Delete post
router.delete('/:postId', async (req,res)=>{
    try {
        await Post.deleteOne({_id: req.params.postId})
        res.json({message: "Deleted Succesfully"})
    } catch(err) {
        res.json({message: err})
    }
})

// Update Post
router.patch('/:postId', async (req,res)=>{
    try {
        const updated = await Post.updateOne({_id: req.params.postId}, {$set: req.body})
        res.json(updated)
    } catch(err) {
        res.json({message: err})
    }
})

module.exports = router