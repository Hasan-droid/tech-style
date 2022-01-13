'use strict'
const express=require('express');
const app=express();

const {router}=require('./routes/showers.route')

app.use(express.json());
app.use(router);


function start(port){
    app.listen(port , ()=>console.log(`Running on port ${port}`))
}

module.exports={
    app:app,
    start:start
}