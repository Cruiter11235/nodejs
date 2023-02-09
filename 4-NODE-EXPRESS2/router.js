const express = require('express');
const Router = express.Router();

let p = {
  name:'zjj',
  age:20,
}

Router.get('/Person',(req,res)=>{
  res.send(p);
})

module.exports = Router;