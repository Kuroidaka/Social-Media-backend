const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

async function connect () {
   
    try{
        await mongoose.connect(process.env.MONGODB_URL)        
        console.log('Connect to Database successfully')
    }
    catch {
        console.log('Connect to Database failure')
    }

}

module.exports = { connect }