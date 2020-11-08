const express = require('express')
const router = express.Router()
const userhandle = require('../handle/userHandle')
router.get('/getuser', userhandle.getUsers)
module.exports = router