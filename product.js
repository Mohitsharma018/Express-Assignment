const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
      name :{
        type:"String",
        required: true,
        trimmed :true

      }, 
      
      description:{
        type:"String",
        required: true,
        trimmed :true

      },

      price:{
        type:"Number",
        required: true,
        trimmed :true

      }, 
      
      stock:{
        type:"Number",
        required: true,
        trimmed :true

      },

      category:{
        type:"String",
        required: true,
        trimmed :true

      }
})

const products = mongoose.model("product" , productSchema)
module.exports ={
    products
}