const express = require('express');

const app = express();

app.listen(8080,()=>{
  console.log('启动服务器');
});
app.get('/:name',(req,res)=>{
  // console.log(req.query);
  console.log(req.params);
  if(req.params.name === 'zjj'){
    res.send('hello zjj')
  }else{
    res.send('404')
  }
});
app.post('/',(req,res)=>{
});