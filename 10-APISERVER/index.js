const express = require('express');
const apirouter = require('./router');
//第三方中间件cors解决跨域问题
const cors = require('cors');
const app = express();

//jsonp接口必须写在cors之前，否则会变成cors接口
app.get('/api/jsonp',(req,res)=>{
  const fullname = req.query.callback;
  const data = {name:'zs',age:22};
  const scriptStr = `${fullname}(${JSON.stringify(data)})`;
  res.send(scriptStr);
});

app.use(cors());
app.listen(8080,()=>{console.log('app start')});
app.use('/api',apirouter);
app.use(express.static(__dirname+'/static'));



