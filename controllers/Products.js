const Product = require('../models/products.js');

const postProducts = async (req,res) => {
    try {
        
        const {name,price,feature,rating,company} = req.body;
        console.log(name,price,feature,rating,company);

        if(!name || !price || !company) {
            res.status(401).json({error : "Need require feilds" });
        }

        const result = await Product.create({name,price,feature,rating,company});
        if(result) res.status(201).json({msg : result });
        else res.status(401).json({error : "Need require feilds" });
        
    } catch (error) {
        console.log(error);
        res.status(401).json({error : "Can't request in the server"})

    }
}

const getAllProducts = async (req,res) =>{
   try {
    
    const {price , name, featured,company,sort,select} = req.query;
  
    
    // queary with name company featured price 
    let quearyObj = {};

    if(name) {
        quearyObj.name = { $regex : name , $options : 'i'}
    }

    if(featured) {
        quearyObj.featured = featured ;
    }

    if(company) {
        quearyObj.company = company;
    }
    
    let data =  Product.find(quearyObj);
    
    // sortting operation 
    if(sort){
        const sortlist = sort.replace(',', " ");
        data = data.sort(sortlist);     
    }

    // select operation 
    if(select){
        const selectList = select.replace(','," ");
        data = data.select(selectList);
    }
    
    // Pagination operation 
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page-1) * limit;


    const dataRes = await data;

    if(dataRes) {
        res.status(201).json({product : dataRes})
    } else {
        res.status(401).json({error : "Somthing went wrong"})
    }



   } catch (error) {
        res.status(401).json({error : "can not fetch all products"})
   }
}

module.exports = {
    getAllProducts,
    postProducts
}