
const express = require('express')
const middlewareController = require('../controllers/middlewareController')
const router = express.Router()

const postControllers = require('../controllers/post.controllers')


// register
router.post('/createPost/:userId', postControllers.createPost)
router.delete('/deletePost/:userId/:postId/:postUserId', middlewareController.verifyTokenAndAdminAuth, postControllers.deletePost)

module.exports = router