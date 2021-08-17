import express from 'express'
// import products from './data/products.js'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorhandling.js'
const app=express()
dotenv.config()
connectDB()
app.get('/', (req,res)=>{

res.send('Api is runiig')


})

// app.get('/api/products',(req,res)=>{
   
// res.json(products)


// })

// app.get('/api/product/:id',(req,res)=>{
//     const product=products.find((p)=>p._id === req.params.id)
// res.json(product)


// })
// app.use(notFound)
// app.use(errorHandler)
app.use('/api/products/', productRoutes)

const PORT =process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))