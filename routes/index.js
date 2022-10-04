
const authemRouter = require('./authem.route')
const userRouter = require('./user.router')
const postRouter = require('./post.route')

function routes(app) {

    app.use('/post', postRouter)
    app.use('/authem', authemRouter)
    app.use('/user', userRouter)
}

module.exports = routes