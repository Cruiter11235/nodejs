const express = require('express');
const bodyparser = require('./bodyParser');
const app = express();
app.listen(8080,()=>{console.log('app start')});

app.use(bodyparser);

app.post('/user',(req,res)=>{
  res.send("ok");
})
