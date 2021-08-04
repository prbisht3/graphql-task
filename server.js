require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose")
const app = express()
const connUri = process.env.db_url
const port = process.env.port || 8000

mongoose.promise = global.Promise;
mongoose.connect(connUri,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
const connection = mongoose.connection
connection.once("open",()=> console.log("Database connection established successfully"))
connection.on("error",(err) => {
    console.log("Database connection error :"+err)
    process.exit()
})
app.listen(port,()=>console.log("server running on:"+port))


