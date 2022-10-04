
const User = require('../models/users')
const Post = require('../models/posts')

const postControllers = {
    createPost: async (req, res) => {
        try{
            const newPost = await new Post({
                postText: req.body.postText,
                postImg: req.body.postImg,
                userId: req.params.userId
            })
            const post = await newPost.save()
            res.status(200).json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    },
    

}

module.exports = postControllers