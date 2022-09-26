const mongoose = require('mongoose')
// const { Schema } = mongoose
const Schema = mongoose.Schema
const User = new Schema ({
    username: { type: String , unique: true, require: true},
    password: { type: String, require: true},
    admin: { type: Boolean, default: false }


},{
    timestamps: true
}
)

module.exports = mongoose.model('User', User)