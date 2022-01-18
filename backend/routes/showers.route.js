 'use strict'

const express = require('express');
const { json } = require('express/lib/response');
const { collection_shower_schema } = require('../models/index')
const router = express.Router();//create a new router object to handle the api calls




router.get('/shower', getAll)
    .get('/shower/:id', getOne)
    .post('/shower', addOne)
    .delete('/shower/:id', deleteOne)
    .put('/shower/:id', updateOne);




 function getAll(req , res) {

    // let records = await collection_shower_schema.read();
    //  console.log("res========> ",arguments)
    //  let args=json(arguments)
    //   let test=res.url
    //  console.log("test ======>" , test)
    res.status(200).json(arguments);

}

async function getOne(req, res) {
    let id = parseInt(req.params.id);
    let record = await collection_shower_schema.read(id);
    res.status(200).json(record);
}

async function addOne(req, res) {

    let object = req.body;
    let record = await collection_shower_schema.create(object);
    res.status(200).json(record);
}

async function deleteOne(req, res) {
    let id = parseInt(req.params.id);
    let record = await collection_shower_schema.delete(id);
    res.status(200).json(record);

}

async function updateOne(req, res) {

    let id = parseInt(req.params.id);
    let object = req.body;
    let record = await collection_shower_schema.update(id, object);
    res.status(200).json(record);
}





module.exports = { router }