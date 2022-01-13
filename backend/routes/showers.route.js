'use strict'

const express=require('express');
const { collection_shower_schema}=require('../models/index')
const router=express.Router();//create a new router object to handle the api calls




router.get('/shower',getAll);
 router.get('/shower/:id',getOne);
 router.post('/shower',addOne);
 router.delete('/shower/:id',deleteOne);
 router.put('/shower/:id',updateOne);


 async function getAll (req ,res){

    let records=await collection_shower_schema.read();
    res.status(200).json(records);

}

async function getOne(req , res){
    let id =parseInt(req.params.id);
    let record=await collection_shower_schema.read(id);
    res.status(200).json(record);
}

async function addOne(req , res){

    let object=req.body;
    let record=await collection_shower_schema.create(object);
    res.status(200).json(record);
}

async function deleteOne(req , res){
    let id =parseInt(req.params.id);
    let record=await collection_shower_schema.delete(id);
    res.status(200).json(record);

}

async function updateOne(req , res){

    let id =parseInt(req.params.id);
    let object=req.body;
    let record=await collection_shower_schema.update(id , object);
    res.status(200).json(record);
}





module.exports={router}