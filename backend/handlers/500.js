'use strict'

module.exports=(err,req , res , next)=>{
    res.status(500).send({
        code:500,
        route:req.path,
        message:`internal server ERROR:${err.message}`
    })
}