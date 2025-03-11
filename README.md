# 移动端扫码应用

这是一个基于HTML、Vue.js和Html5-QRCode的移动端扫码应用，可在iOS和Android设备上使用，通过手机摄像头实现二维码扫描功能。

## 功能特点

- 兼容iOS和Android设备
- 自动检测并优先使用后置摄像头（更适合扫码）
- 简洁直观的用户界面
- 实时显示扫码结果
- 支持启动/停止扫码控制
- 扫码历史记录保存（使用localStorage本地存储）
- URL智能识别（自动将URL转为可点击链接）
- 结果复制到剪贴板功能
- 二维码生成功能（用于测试）
- 适配移动设备的响应式设计
- 优化的错误处理和用户提示

## 技术栈

- HTML5
- CSS3（响应式设计）
- Vue.js 3（通过CDN引入）
- Html5-QRCode库（用于摄像头访问和二维码解析）
- QRCode.js库（用于生成测试二维码）

## 使用方法

1. 直接在浏览器中打开`index.html`文件
2. 点击"开始扫码"按钮
3. 允许浏览器访问摄像头权限
4. 将二维码对准摄像头视窗
5. 成功扫描后，结果将显示在页面下方
6. 点击"停止扫码"按钮可以结束扫码过程
7. 在"历史"标签可以查看之前扫描过的所有二维码
8. 在"演示"标签可以生成测试二维码进行扫描测试

## 功能说明

### 扫码功能
- 自动检测并优先使用后置摄像头
- 实时显示扫描视频流
- 成功识别后显示结果并保存
- 若扫描到URL，会自动转换为可点击链接

### 历史记录
- 保存最近50条扫码记录
- 显示扫码时间（今天/昨天/日期）
- 支持URL的直接打开
- 一键复制扫码结果
- 清空历史记录功能

### 演示功能
- 可输入任意文本生成二维码
- 生成的二维码可用于测试扫码功能

## 注意事项

- 使用前请确保设备摄像头功能正常
- 在iOS设备上，必须通过HTTPS访问页面才能使用摄像头功能
- 不同浏览器和设备可能有不同的权限请求方式
- 光线不足可能会影响扫码效果
- 如果遇到扫码困难，请确保二维码清晰可见且未被损坏
- 历史记录使用浏览器本地存储，清除浏览器数据会导致记录丢失

## 本地测试

由于浏览器安全策略，在本地文件系统中直接打开HTML文件时，某些浏览器可能会限制摄像头访问。推荐以下方式进行本地测试：

1. 使用简单的HTTP服务器运行项目
   ```
   # 如果有Python环境，可以使用以下命令
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

2. 然后通过 `http://localhost:8000` 访问应用

## 移动设备测试

要在移动设备上测试此应用，您可以：

1. 使用本地网络服务器运行应用，然后通过同一网络中的移动设备访问
2. 使用在线服务如GitHub Pages、Netlify等部署应用
3. 使用像ngrok这样的工具创建一个临时公共URL指向本地服务器

## 浏览器兼容性

该应用已在以下环境测试通过：
- iOS Safari (iOS 12+)
- Android Chrome (最新版)
- 桌面Chrome/Firefox/Edge (最新版)

## 开发者信息

如需增强或修改此应用的功能，请参考以下资源：

- [Vue.js文档](https://vuejs.org/guide/introduction.html)
- [Html5-QRCode库](https://github.com/mebjas/html5-qrcode)
- [QRCode.js库](https://github.com/davidshimjs/qrcodejs)
- [摄像头API参考](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) 