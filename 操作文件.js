// 首先必须先引入对应模块，在这个模块里有所有的操作文件的API
const fs = require(' fs ')

/**
 * 读取文件
 * 方法：fs.readFile()
 * 参数：文件路径，回调函数
 *              回调函数参数：err res
 * 注意：读取到的数据是16进制的，要使用toString()方法转换: res.toSrting()
 * 示例：
 */
fs.readFile('文件路径', (err, res) => {
  // 执行完读取操作的的回调
  // 当读取成功的时候res就是读取到的内容
  console.log(res.toSrting())
  // 当读取失败的时候err就是错误信息
  console.log(err)
})

/**
 * 写入文件
 * 方法：fs.writeFile()
 * 参数：文件路径，写入的内容，回调函数
 *                        回调函数参数：err
 * 注意：写入的内容会覆盖原内容
 * 示例：
 */
fs.writeFile('文件路径', '写入的内容', err => {
  // 执行完写入操作的的回调
  // 当写入失败的时候err就是错误信息
  console.log(err)
})

