const express = require('express');
const parser = require('body-parser');

const app = express();
app.listen(8080,()=>{console.log('app start')});

app.use(express.json());
//req.body默认undefined
// app.use(express.urlencoded({extended:false}));
app.use(parser.urlencoded({extended:false}));

app.post('/',(req,res)=>{
  console.log(req.body);
  res.send("ok");
});

