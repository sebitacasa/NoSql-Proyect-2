require('dotenv').config()
require("express-async-errors")


// asyn errors

const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

//middleware

app.use(express.json())


// rootes

app.get('/', (req,res)=>{
    res.send('<h1> Store API </h1><a href="api/v1/products">Products routes</a>')
})

app.use('/api/v1/products', productsRouter)

//products routes

app.use(errorHandlerMiddleware)
app.use(notFound)

const port = process.env.PORT

// connectDB
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
