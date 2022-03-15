const Product = require('../models/product')

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        
    })
    res.status(200).json({ products })
}

const getAllProducts = async (req, res) => {

    
    const products = await Product.find(req.query) // TOMA VALOR DEL QUERY, NO DEL PARAMS... MIRA BIEN PELOTUDO!!!
    
    res.status(200).json({ products, nhHits: products.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}