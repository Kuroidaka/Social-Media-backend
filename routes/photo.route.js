const express = require('express')
// const storage = require('../middleware/upload')
const File = require('../models/files')
const fs = require('fs')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './asserts/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})
const photoController = require('../controllers/file.controller')
const upload = multer({ storage });
const router = express.Router()



router.post('/upload/:userId/:postId', upload.single('file'), photoController.upload)
router.get('/all', async (req,res)=>{
    const allData = await File.find()
    res.json(allData)
  })
  

// router.get('/all', photoController.getPhoto)

module.exports = router