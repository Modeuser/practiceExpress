const express = require('express')
const app = express()
const logger = require('./loggerMiddleware')
const {products} = require('./data.js')

// you can specific which route will use this middleware
// by providing the path as the first argument
app.use(logger)
// multiple middleware can be setup by aruging with an array
// the req,res order will be in the same order as the array

app.get('/',(req,res)=>{
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })

    res.json(newProducts)
})

// route that specifies productID
app.get('/api/products/:productID',(req,res)=>{
    const {productID} = req.params

    const singleProduct = products.find((product) => product.id === Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct)
})

// route that accepts query
app.get('/api/v1/query',(req,res)=>{
    const {search,limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if (sortedProducts.length < 1) {
        return res.status(200).json({sucess:true,data:[]})
    }
    res.status(200).json(sortedProducts)
})

// server start
app.listen(5012, ()=>{
    console.log('server is listening on 5012')
})