const mongoose = require('mongoose')

module.exports = async function connect() {
   
    try{
        const connectionParams =  {
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifiedTopology: true
        }
        await mongoose.connect(process.env.MONGODB_URL, connectionParams)         
        console.log('Connected to database')
    }
    catch(error){
        console.log(error);
        console.log('Could not connect to database')
    }

}