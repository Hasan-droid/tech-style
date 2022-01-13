'use strict'
require('dotenv').config();

const myserver=require('./server');
const{database}=require('./models/index')



 console.log("database===>", database.truncate)

database.sync().then(()=>{//Sync all defined models to the DB.
    myserver.start(process.env.PORT || 3000)
}).catch(console.error)

