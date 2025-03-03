const express = require("express")

const {  customers} = require("../Models/customer")

const customerRouter = express.Router()

customerRouter.get("/customer", async(req,res)=>{
     let data = await   customers.find({})
     res.status(200).json(data)
})

customerRouter.post("/customer", async(req,res)=>{
     await   customers.insertOne(req.body)
     res.status(200).json({msg :" insert success"})
})

customerRouter.put("/customer/:id", async(req,res)=>{
    await   customers.findByIdAndUpdate({_id : req.params.id},req.body)
    res.status(200).json({msg :"update success"})
})

customerRouter.delete("/customer/:id", async(req,res)=>{
    await   customers.findByIdAndDelete(req.body.id)
    res.status(200).json({msg :"delete success"})
})

module.exports ={
customerRouter}

