const express = require('express');
const Router = require('./router');

const app = express();
//app.use 注册全局中间件
app.use(Router);

app.listen(8080,()=>{
  console.log('启动服务器');
})

app.use('/abc',express.static(__dirname+'/static'));

