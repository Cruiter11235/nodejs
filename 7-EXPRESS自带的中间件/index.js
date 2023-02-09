// 除了错误级别的中间件，其他所有中间件都必须写在路由之前
//本节课用postman接口工具调试
const express = require('express');
const app = express();

app.listen(8080,()=>{
  console.log("启动");
})

app.use(express.static(__dirname+"/static"));

//解析发来的json,将json挂载到req.body，供后端访问
app.use(express.json());

//解析发来的urlencoded数据.并挂载到req.body
app.use(express.urlencoded({extended:false}));


app.get('/',(req,res)=>{
  res,send('home');
})

app.post('/user',(req,res)=>{
  console.log('someone has sent a post');

  console.log(req.body);
  res.send("success");
})