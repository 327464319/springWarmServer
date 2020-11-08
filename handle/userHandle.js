const db = require('../db/index')
module.exports.getUsers = (req, res) => {
  const sql = 'select * from user'
  db.query(sql, (err, result) => {
    if (err) return req.cc(err)

    res.send({
      status: 0,
      message: '获取文章分类列表成功！',
      data: result,
    })
  })
}