const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
      fullname :{
        type:"String",
        required: true,
        trimmed :true

      }, 
      
      email:{
        type:"String",
        required: true,
        trimmed :true

      },

      phone:{
        type:"Number",
        required: true,
        trimmed :true

      }, 
      
      address:{
        type:"String",
        required: true,
        trimmed :true

      },

      registeredAt:{
        type:"String",
        required: true,
        trimmed :true

      }

})

const customers = mongoose.model("customer" , customerSchema)
module.exports ={
    customers
}