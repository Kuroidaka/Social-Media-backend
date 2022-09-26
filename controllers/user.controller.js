const User = require('../models/users')

const userController = {
    getAllUsers: async (req, res) => {
        try{
            const user = await User.find()
            res.status(200).json(user)
        }
        catch(error){
            res.status(500).json(error)
        }       
    },
    deleteUser: async (req, res) => {
        try{
            const user = await User.findById(req.params.id)
            res.status(200).json('delete successfully')
        }
        catch(error){
            res.status(500).json(error)
        }
    },
    deleteAll: async (req, res) => {
        try{
            const user = await User.deleteMany({})
            res.status(200).json('deleted all')
        }
        catch(error){
            res.status(500).json(error)
        }
    }

}

module.exports = userController