/*
 * @Author: hanmingda
 * @Date: 2022-07-21 16:58:43
 * @LastEditors: hanmingda
 * @LastEditTime: 2022-07-26 15:07:23
 * @Description: 
 * @FilePath: \node-mysql-demo\router.js
 */
let express = require('express')
let router = express.Router()
// 用户
let user = require('./api/user')
// 上传
let file = require('./api/file')

// 用户相关
// 获取用户列表
router.get('/api/user/list', user.list)
// 增加用户
router.post('/api/user/add', user.add)
// 修改用户
router.post('/api/user/update', user.update)
// 删除用户
router.post('/api/user/delete', user.delete)


// 上传图片
router.post('/api/uploadImg', file.uploadImg)

module.exports = router