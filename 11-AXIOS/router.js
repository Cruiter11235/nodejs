const express = require('express');
const Router = express.Router();
Router.use(express.json());
Router.use(express.urlencoded({ extended: false }));

//axios-server
Router.get('/axios-server', (req, res) => {
  console.log('访问成功');
  res.send({
    query: req.query,
  });
})
Router.post('/axios-server/:key', (req, res) => {
  console.log('访问成功');
  setTimeout(() => {
    res.send({
      body: req.body,
      query: req.query,
      params: req.params
    });
  }, 3000);

})
Router.post('/fetch-server', (req, res) => {
  const data = { name: 'shangguigu' };
  res.send(JSON.stringify(data));
})
module.exports = Router;