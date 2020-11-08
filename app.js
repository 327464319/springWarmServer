const express = require('express')
const cors=require('cors')
const app = express()

const userRouter=require('./router/userRouter')
app.use(cors())
app.use(function (req, res, next) {
  req.cc = function (err, status = 1) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

app.use(userRouter)
app.use(express.urlencoded({ extended: false }))
app.use(function (err, req, res, next) {
  console.log(err)
  // if (err instanceof joi.ValidationError) {
  //   return req.cc('用户信息格式不对！')
  // }
  // if (err.name === 'UnauthorizedError') return req.cc('身份认证失败！')
  if (err) {
    return res.send({
      status: 1,
      message: '发生错误！',
    })
  }
})
app.listen(80,()=> console.log('启动在http://127.0.0.1'))