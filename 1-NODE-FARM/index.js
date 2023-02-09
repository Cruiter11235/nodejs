//fs module
//py: from 'fs' import fs 
const fs = require('fs');

// synchronous read/write
// const txt = fs.readFileSync(mypath,'utf-8');
// const textOut = `This is what ... ${txt}.\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/input.txt',textOut);
// console.log('done');

//asynchronous read/write 
//回调函数
fs.readFile('./txt/input.txt','utf-8',(err,data)=>{
  console.log(data);
})
console.log('Reading File...');



