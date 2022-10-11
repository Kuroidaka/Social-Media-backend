const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const connect = require('./config/database')

const photoRouter = require('./routes/photo.route')

const routes = require('./routes/index')


const app = express()
dotenv.config()


connect()

// media routes



app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(cors()) 
app.use(cookieParser())
app.use(morgan('dev'))

app.use(express.json())

routes(app)
// app.use('/authem', authemRouter)


app.listen('8000', () => {
    console.log('listening on port 8000')
})

