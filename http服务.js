// 先导入对应的模块
const http = require('http')

// 一个简单的http服务
//利用http.createServer()创建一个实例
const server = http.createServer()
//注册一个"收到请求"的事件,事件处理的回调函数里要传入2个参数，分别为 "请求对象Request""响应对象Response"
server.on('request', (Request,Response) => {
  // 当收到request请求，执行这个回调函数
  console.log("收到请求了")
  // 响应
  // Request 是一些请求信息比如请求地址，请求头，请求体这些
  console.log(Request.url)
  // Response 用来给客户端响应，返回数据，使用Response.write()
  // 可以使用多次，但最后必须写Response.end()结束响应，否则客户端会一直等待
  Response.write('你好')
  Response.write('世界')
  // 结束响应，必须写，否则客户端会一直等待
  Response.end()
})
// 最后还要绑定端口号，启动服务器
server.listen(3000, () => {
  //因为服务开启需要一点时间，所以可以在这里写一些日志
  console.log("服务开启了，可以通过http://127.0.0.1:3000/进行访问")
})





