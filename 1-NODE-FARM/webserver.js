//http module
const http = require('http');
const server = http.createServer();
//listener
server.on('request',function(req,res){
  //req
  const reqURL = req.url;
  console.log('Someone visit our web server');
  // console.log('url',req.url);
  // console.log('method',req.method);
  //设置content-type响应头，解决中文乱码问题

  let content = '<h1>404</h1>';
  res.setHeader('Content-Type','text/html; charset=utf-8');
  if(reqURL==='/'||reqURL==='/index.html'){
    content = '<h1>首页</h1>';
  }
  
  res.end(content);
})
//start 
server.listen(8080,()=>{
  console.log('server start: localhost:8080')
})