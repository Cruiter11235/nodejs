const express = require('express');
const app =express();

app.listen(8080,()=>{
  console.log('启动服务器');
})

app.get(
  '/:id',
  (req,res)=>{
    if(req.params.id !== '2020141430191'){
    throw new Error('服务器发生了错误');
    }
    res.send("success");
  });

app.use((err,req,res,next)=>{
  res.send("ERROR:  "+err.message);
})
