'use strict'
const express=require('express');
const app=express();

const {router}=require('./routes/showers.route')
const notFoundPage=require('./handlers/404');
const serverError=require('./handlers/500');
const basicAuth=require('./middlewares/basic')

app.use(express.json());
app.use(router);


app.post('/signin' , basicAuth , (req , res , next)=>{
    const user={
        user:req.user , 
        token:req.user.token
    };
    res.status(200).json(user);
});


app.get('/bad' , (req , res)=>{
    let number=12;
     number.forEach(x=>console.log(x))
    res.send('this is bad roue');
})


app.use("*",notFoundPage);
app.use(serverError)


function start(port){
    app.listen(port , ()=>console.log(`Running on port ${port}`))
}

module.exports={
    app:app,
    start:start
}