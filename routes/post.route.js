
const express = require('express')
const router = express.Router()

const postControllers = require('../controllers/post.controllers')


// register
router.post('/createPost/:userId', postControllers.createPost)


module.exports = router