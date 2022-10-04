const { findOne, findById } = require('../models/users')
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
    getUser: async (req, res) => {
        try{
            const user = await User.findById(req.params.id)
            return res.status(200).json(user)

        }
        catch(error){
            return res.status(500).json(error)
        }
        
        

    },
    deleteUser: async (req, res) => {
        try{
            const user = await User.findById(req.params.id)
            return res.status(200).json('delete successfully')
        }
        catch(error){
            return res.status(500).json(error)
        }
    },
    updateInfo: async(req, res) => {
        
        try{    
            // const userInfo = await new User.info
            const info ={
                name: req.body.name,
                liveIn: req.body.liveIn,
                comeFrom: req.body.comeFrom, 
                about: req.body.about,    
                avatarUrl: req.body.avatarUrl,
                theme: req.body.theme,  
            }

            const user = await User.findByIdAndUpdate(req.params.id, 
            {info: info},
            {
                new: true,
                upsert: true // Make this update into an upsert
            })
            return res.status(200).json(user)
            
        }
        catch(error){
            return res.status(500).json(error)
        }
        
    }

}

module.exports = userController