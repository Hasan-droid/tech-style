'use strict'

module.exports=(req , res , next)=>{
  res.status(200).send({
    code:404,
    path:req.root,
    message:'sorry page not found'
  })
}