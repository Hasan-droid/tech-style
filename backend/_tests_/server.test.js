'use strict'
const server=require('../server');
const supertest=require('supertest');
const res = require('express/lib/response');
const request=supertest(server.app);

let id=1;
let object={
    image:"1123",
    desciption:"ssds",
    price:12.3
}

describe("test Handlers",()=>{
   it("page not found",async()=>{
    let test=await request.get('/test');
    expect(test.status).toEqual(200)
   })

   it("internal server error",async()=>{
    let test=await request.get('/bad');
    expect(test.status).toEqual(500)
   })
})

describe ("test shower api CRUD" , ()=>{
  it("TEST getAll()" , async()=>{
      const response=await request.get('/shower');
      expect(response.status).toEqual(200)
  })

  it("TEST getOne()" , async()=>{
      let response=await request.get(`/shower/${id}`);
      expect(response.status).toEqual(200);
  })

  it("TEST addOne()" , async()=>{
    let response=await request.post(`/shower`).send(object);
    expect(response.status).toEqual(200);
})

it("TEST deleteOne()" , async()=>{
    let response=await request.delete(`/shower/${id}`);
    expect(response.status).toEqual(200);
})

it("TEST updateOne()" , async()=>{
    let response=await request.put(`/shower/${id}`).send(object);
    expect(response.status).toEqual(200);
})
})