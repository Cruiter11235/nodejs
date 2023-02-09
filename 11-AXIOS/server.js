const express = require('express');
const cors = require('cors');
const Router = require('./router');
const app = express();
app.use(cors());
app.use(Router);

app.listen(8080,()=>{
  console.log("server start");
})