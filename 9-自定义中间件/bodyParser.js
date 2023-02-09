const qs = require('querystring');

module.exports = function (req, res, next) {
  //定义中间件
  console.log("启动中间件");

  let str = "";
  req.on('data', (chunk) => {
    str += chunk;
  });

  req.on("end", () => {
    const body = qs.parse(str);
    req.body = body;
    next();
  });
}