const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authemControllers = {

// generate access token 
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_ACCESS_KEY,
            {expiresIn: '30s'}
        )
    },
// generate refresh token 
generateRefreshToken: (user) => {
    return jwt.sign(
        {
            id: user.id,
            admin: user.admin
        },
        process.env.JWT_REFRESH_KEY,
        {expiresIn: '360d'}
    )
},

// register
    register: async (req, res) => {
        try{
            // Hash password
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
            
            // create new User
            const newUser = await new User({
                username: req.body.username,
                password: hashed
            })

            // save db
            const user = await newUser.save()
            res.status(200).send(user)

        }catch(error){
            res.status(500).json(error)

        }
    },
// login
    login: async (req, res) => {
        try{
            const user = await User.findOne({username: req.body.username})
            if(!user) {
                res.status(404).json('wrong user name')
            }
          
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(!validPassword) {
                res.status(404).json('wrong password')
            }
            if(user && validPassword) {
                const accessToken = authemControllers.generateAccessToken(user)
                const refreshToken = authemControllers.generateRefreshToken(user)
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: 'strict'
                })

                const { password, ...other } = user._doc
                res.status(200).json({...other, accessToken})
            }
        }
        catch(error){
            res.status(500).json(error)
        }

    }    
}

module.exports = authemControllers