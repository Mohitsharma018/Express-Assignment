const express = require("express")

const { products} = require("../Models/product")

const authorRouter = express.Router()

authorRouter.get("/product", async(req,res)=>{
     let data = await  products.find({})
     res.status(200).json(data)
})

authorRouter.post("/product", async(req,res)=>{
     await  products.insertOne(req.body)
     res.status(200).json({msg :" insert success"})
})

authorRouter.put("/product/:id", async(req,res)=>{
    await  products.findByIdAndUpdate({_id : req.params.id},req.body)
    res.status(200).json({msg :"update success"})
})

authorRouter.delete("/product/:id", async(req,res)=>{
    await  products.findByIdAndDelete(req.body.id)
    res.status(200).json({msg :"delete success"})
})

module.exports ={
    authorRouter
}

