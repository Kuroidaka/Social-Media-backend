const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');

const routes = require('./routes/index')
const db = require('./config/database')

dotenv.config()
const app = express()

// db.connect()
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Connect to Database successfully')
})        


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


app.listen('8080', () => {
    console.log('listening on port 8080')
})

