const jwt = require('jsonwebtoken')

const middlewareController = {

    verifyToken: async (req, res, next) => {
        const token = req.headers.token
        if(token){
            const accessToken = await token.split(' ')[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (error, data) => {
                if(error) {
                    res.status(403).json('token is not valid')
                }
                else {
                    req.data = data
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