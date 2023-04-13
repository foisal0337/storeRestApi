require('dotenv').config();

const conectDB = require('./db/conect.js');
const Product = require('./models/products.js');
const productJsonData = require('./product.json');


const start = async () =>{
    try {        
        await conectDB(process.env.DB_URL);
        await Product.create(productJsonData);
        console.log("Successfully ... ")
    } catch (error) {
        console.log(error);
    }
}

start();