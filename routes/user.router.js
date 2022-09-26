const express = require ('express')
const router = express.Router()
const middlewareController = require('../controllers/middlewareController')
const userController = require('../controllers/user.controller')

router.get('/getAllUsers', middlewareController.verifyToken, userController.getAllUsers)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)


module.exports = router