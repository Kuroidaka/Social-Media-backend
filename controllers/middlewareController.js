const jwt = require('jsonwebtoken')
const User = require('../models/users')

const middlewareController = {

    verifyToken: async (req, res, next) => {
        const token = await User.findById(req.params.id)
        const accessToken = token.accessToken
        // const token = req.headers.token
        // console.log('--------------ACCESS TOKEN----------------', accessToken);
        if(token){
            // const accessToken = await token.split(' ')[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (error, data) => {
                if(error) {
                    res.status(403).json('token is not valid')
                }
                else {
                    req.data = data
                    // console.log('token verified')
                    next()
                }
            })
        }
        else {
            res.status(401).json('you\'re not authenticated')
        }
    },
    verifyTokenAndAdminAuth: async (req, res, next) => {
        middlewareController.verifyToken(req, res , () => {
            if(req.data.id == req.params.id || req.admin)
                next()
            else 
                res.status(403).json('you\'re not allow to delete')
        })
    }

}

module.exports = middlewareController