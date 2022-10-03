
const express = require('express')
const router = express.Router()

const authemControllers = require('../controllers/authem.controller')

// register
router.post('/register', authemControllers.register)

// login
router.post('/login', authemControllers.login)

// request refresh token
router.post('/refresh', authemControllers.requestRefreshToken)

module.exports = router