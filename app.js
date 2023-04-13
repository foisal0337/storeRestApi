const express = require('express');
const app = express();
require('dotenv').config();

const conectDB = require('./db/conect.js');
const productRouter = require('./routes/Products.js');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));


app.get('/',(req,res)=>{
    res.send("Hello from node js server");
})

app.use('/api/v1/products', productRouter);


const port = process.env.PORT || 3000;

const start = async() =>{
    try {
        await conectDB(process.env.DB_URL);
        app.listen(port,()=> console.log('app is connected at port 3000'))
    } catch (error) {
        console.log(error);
    }
}

start();