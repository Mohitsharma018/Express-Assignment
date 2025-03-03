const URL = "mongodb+srv://mohitsharma018:Rajv1981@cluster0.xdsvx.mongodb.net/DataBase?retryWrites=true&w=majority&appName=Cluster0"


const mongoose = require("mongoose")


function allData(){
    mongoose.connect(URL)
    .then(()=>{
        console.log(" DB Connected ")
    })
    .catch(()=>{
        console.log(" DB DisConnected ")
    })
}


module.exports={
    allData
}