
const User = require('../models/users')
const Post = require('../models/posts')

const postControllers = {
    createPost: async (req, res) => {
        try{
            const newPost = await new Post({
                postText: req.body.postText,
                userId: req.params.userId,
                name: req.body.name,
                avatarUrl: req.body.avatarUrl,

            })
            const post = await newPost.save()
            res.status(200).json(post)
        }
        catch(error){
            res.status(500).json(error)
        }
    },
    deletePost: async(req, res) => {
        try{
            await Post.findByIdAndDelete(req.params.postId)
            res.status(200).json('delete successful')

        }
        catch(error){
            res.status(500).json(error)
        }
    }

}

module.exports = postControllers