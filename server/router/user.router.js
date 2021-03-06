const express = require('express')
const router = express.Router();
const UserController = require('../controller/user.controller')
const checkToken = require('../validate/checkUser')

router.put('/update/:id',checkToken.checkToken, UserController.updateUser)

module.exports = router