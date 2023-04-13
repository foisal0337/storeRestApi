const mongoose = require('mongoose');

const conectDB = (url) =>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = conectDB;