const express = require ('express')
const router = express.Router()
const middlewareController = require('../controllers/middlewareController')
const userController = require('../controllers/user.controller')

router.get('/getAllUsers', middlewareController.verifyToken, userController.getAllUsers)
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)
router.post('/updateInfo/:id', middlewareController.verifyTokenAndAdminAuth, userController.updateInfo)
router.get('/getUser/:id', userController.getUser)

module.exports = router