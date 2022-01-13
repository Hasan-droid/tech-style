'use strict'

require("dotenv").config();

const shower_model=require('./showers.model')
const Collection=require('./lbs/collection_class')
const POSTGRES_URL=process.env.POSTGRES_URI;
const{Sequelize, DataTypes}=require('sequelize');

console.log("POSTGRES_URL=====>" ,POSTGRES_URL)

let sql=new Sequelize(POSTGRES_URL,{});

const shower_schema=shower_model(sql , DataTypes);

console.log("shower_schema===>" , shower_schema)
const collection_shower_schema=new Collection(shower_schema);

console.log("collection_shower_schema=====>", collection_shower_schema)

module.exports={
    collection_shower_schema,
    database:sql
}