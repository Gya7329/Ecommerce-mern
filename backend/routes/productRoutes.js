import express from 'express'
import expressAsyncHandler from 'express-async-handler'
const router =express.Router()
import asynchandler from 'express-async-handler'
import productModels from '../models/productModels.js'



router.get('/',expressAsyncHandler(async(req,res)=>{
   const products = await productModels.find({})
 

    res.json(products)
        

 
    
  }))
    
router.get('/:id',expressAsyncHandler(async(req,res)=>{
        const product=productModels.findById(req.params.id)
        if(product){
            res.json(product)
        }
else{

res.status(404).json({message:'Product Not found'})

}
    

})
)
export default router
