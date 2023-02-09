```js
CORS 响应头部 
1. -Access-Control-Allow-Origin
如果指定了Access-Control-Allow-Origin 字段的值为通配符*，表示允许来自任何域的请求.
> res.setHeader('Access-Control-Allow-Origin','*');
2. -Access-Control-Allow-Headers

默认情况下,CORS 仅支持客户端向服务器发送的如下的9个请求头
Accept,Accept-Language,Content-Languange,DPR,Downlink,Save-Data,viewport-Width,Width,Content-Type

如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers对额外的请求头进行声明，否则请求失败。
3. -Access-Control-Allow-Methods
默认情况下CORS仅支持GET,POST,HEAD.如果想要用PUT、DELETE请求，需要在该响应头部声明。
通配符的作用同上

```

