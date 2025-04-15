const express = require('express')
const path = require('path')

const app = express()
const port = 8019 // 自定义端口号（不要与已存在端口冲突）

// 设置根目录
const rootPath = path.join(__dirname)

// 静态资源中间件 - 处理static目录下的文件
app.use('/static', express.static(path.join(rootPath, 'static')))

// 处理根路由，返回index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(rootPath, 'index.html'))
})

// 启动服务器
app.listen(port, () => {
  console.log(`服务器在端口 ${port} 运行中 - http://localhost:${port}`)
  console.log(`静态资源目录: ${path.join(rootPath, 'static')}`)
})
