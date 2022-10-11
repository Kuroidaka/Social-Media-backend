// const dotenv = require('dotenv')
// const {GridFsStorage} = require('multer-gridfs-storage');
// const User = require('../models/users');

// dotenv.config()

// const storage = new GridFsStorage({
//     url: 'mongodb://localhost:27017/Social',
//     file: (req, file) => {

//         const match = ['image/png','image/jpeg']
//         if(match.indexOf(file.mimetype) === -1){
//             const filename = `${Date.now()}-image-${file.originalname}`
//             return filename
//         }
//         return {
//             bucketName: 'photo',
//             filename: `${Date.now()}-image-${file.originalname}`
//         }
//     }
// })



// module.exports = storage