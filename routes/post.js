const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const authenticate = require('../middleware/authenticate');
const User = require('../models/user');

// Get all Posts
router.get('/', authenticate, async (req, res) => {
    try {
        const Posts = await Post.findAll();
        res.json(Posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a Post
router.post('/', authenticate, async (req, res) => {
    try {
        const newPost = await Post.create({
          title: req.body.title,
          author: req.body.author,
          published_date: req.body.published_date
        });
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get detail
router.get('/:id', authenticate, async (req, res) => {
    try {
        const {id} = req.params
        const findPost = await Post.findByPk(id);
        res.json(findPost);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a Post
router.post('/:id', authenticate, async (req, res) => {
    try {
        const {id} = req.params
        const PostUpdate = await Post.findByPk(id);

        if (!PostUpdate) {
            res.status(404).json('not found Post!');
        }
        const updatePost = await PostUpdate.update(req.body);
        res.status(201).json(updatePost);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;