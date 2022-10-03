const User = require('../models/users')

const userController = {
    getAllUsers: async (req, res) => {
        try{
            const user = await User.find()
            return res.status(200).json(user)
        }
        catch(error){
            return res.status(500).json(error)
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
    

}

module.exports = userController