const express = require('express');
const app = express();

//定义一个中间件函数
const mw = function(req,res,next){
  console.log('这是最简单的中间件函数');
  //把流转关系，交给下一个中间件
  let a = 'params from mw';
  next(a);
}
//全局生效的中间件,每一次method都会调用
app.use(mw);


//第二个中间件
app.use((aa,req,res,next)=>{
  console.log('第二个中间件');
  console.log(aa);
  console.log(req);
  console.log(res);
  next();
})


app.listen(8080,()=>{
  console.log('localhost://8080');
})
app.get('/',(req,res)=>{
  res.send('Home Page');
})
app.get('/user',(req,res)=>{
  res.send('User Page');
})