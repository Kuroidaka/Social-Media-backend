const mongoose = require('mongoose')
// const { Schema } = mongoose
const Schema = mongoose.Schema
const Post = new Schema ({
    postText: {type: String},
    postImg: {type: String},
    userId: {type: String}

},{
    timestamps: true
})



module.exports = mongoose.model('Post', Post)