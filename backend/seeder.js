import  mongoose  from "mongoose";
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModels.js'
import Order from './models/orderModels.js'
import Product from './models/productModels.js'
import connectDB from "./config/db.js";
import colors from 'colors'
dotenv.config()

connectDB()

const importData =async () =>{

try {
     await Order.deleteMany()
     await User.deleteMany()
     await Product.deleteMany()
    
const createdUsers= await User.insertMany(users)

const adminUser =createdUsers[0]._id

const sampleProducts= products.map((product)=>{

return {...product,user:adminUser}


})
await Product.insertMany(sampleProducts)
console.log('Data imported!!!!!!!'.green.inverse)
process.exit()

} catch (error) {
    console.error(error)
    
}



}

const destroyData =async () =>{

    try {
         await Order.deleteMany()
         await User.deleteMany()
         await Product.deleteMany()
        
  
         console.log('^^^^^^ Data destroy ^^^^^^^'.red.inverse)
         process.exit(1)
    
    } catch (error) {
        console.error(error)
        
    }
    
    
    
    }
if(process.argv[2]==='-d')
{
destroyData()

}
else{

    importData()
}