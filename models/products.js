const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name  : {
        type : String,
        required : [true, "product name must require"]
    },
    price : {
        type : Number,
        required : [true , 'Product price must require']
    },
    featured : {
        type : Boolean,
        default : false,
    },
    rating : {
        type : Number,
        default : 4.5
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    company : {
        type : String,
        enum : {
            values : ['daraz' , 'evaly' , 'webShop']
        }
    }
})

module.exports = mongoose.model("Product",productSchema);