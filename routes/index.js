
const authemRouter = require('./authem.route')
const userRouter = require('./user.router')

function routes(app) {
    app.use('/authem', authemRouter)
    app.use('/user', userRouter)
}

module.exports = routes