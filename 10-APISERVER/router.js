// a router for api
const express = require('express');
const Router = express.Router();
Router.use(express.json());
Router.use(express.urlencoded({ extended: false }));

Router.get('/', (req, res) => {
  //如果发生跨域问题，需要设置响应头 res.setHeader('...','*')
  const query = req.query;
  setTimeout(() => {
    res.send({
      status: 0,
      msg: 'get is success',
      data: query
    });
  }, 3000);

});
Router.post('/', (req, res) => {
  const body = req.body;
  res.send({
    status: 0,
    msg: 'post is success',
    data: body,
  })
});
Router.delete('/', (req, res) => {
  res.send("ok");
})
module.exports = Router;
