require("dotenv").config()
const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const mongoose = require("mongoose")
const app = express()
const connUri = process.env.db_url
const port = process.env.port || 8000
const schema = require('./Routes/index');

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
app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(port,()=>console.log("server running on:"+port))


