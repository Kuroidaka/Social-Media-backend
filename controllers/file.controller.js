const mongoose = require('mongoose')
const File = require('../models/files')
const fs = require('fs')

const photoController = {
    upload:  async (req, res) => {
    if (req.file === undefined) return res.send("you must select a file.");

    const file = await new File({
        img: {
            data: fs.readFileSync('./asserts/uploads/' + req.file.filename),
            contentType: "image/png",
        },
        userId: req.params.userId,
        postId: req.params.postId
    })
    console.log(file);
    const newFile = await file.save()

    return res.json(newFile);
},
    // getPhoto : async (req, res) => {
    //     try {
    //         const newfi = await gfs.files.find()
    //         // const readStream = gfs.createReadStream(newfi.filename);
    //         // const newFile = readStream.pipe(res);
    //         console.log(newfi);
    //         res.json(newfi)
    //     } catch (error) {
    //         res.status(404).send("not found");
    //     }
    // }
}   

module.exports = photoController