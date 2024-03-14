const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authenticate = require('../middleware/authenticate');
const jwt = require('jsonwebtoken');
const {ACCESS_TOKEN_SECRET} = process.env;
const secretKey = ACCESS_TOKEN_SECRET;

// Get all Users
router.get('/', authenticate,  async (req, res) => {
    try {
        const Users = await User.findAll();
        res.json(Users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a User
router.post('/', authenticate, async (req, res) => {
    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get detail
router.get('/:id', authenticate, async (req, res) => {
    try {
        const {id} = req.params
        const findUser = await User.findByPk(id);
        res.json(findUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a User
router.post('/:id', authenticate, async (req, res) => {
    try {
        const {id} = req.params
        const userUpdate = await User.findByPk(id);

        if (!userUpdate) {
            res.status(404).json('not found user!');
        }
        const updateUser = await userUpdate.update(req.body);
        res.status(201).json(updateUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;