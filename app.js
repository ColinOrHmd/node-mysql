/*
 * @Author: hanmingda
 * @Date: 2022-07-21 16:57:20
 * @LastEditors: hanmingda
 * @LastEditTime: 2022-07-27 15:52:48
 * @Description: 配置服务器相关信息
 * @FilePath: \node-mysql-demo\app.js
 */
let express = require('express')
let app = express()
let cors = require('cors')
let bodyParser = require('body-parser')
let router = require('./router')

app.use(bodyParser.json());  //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors()) // 配置跨域，必须在路由之前
app.use(router)           


app.listen(80, () => {
  console.log('服务器启动成功');
})