const express = require('express')
const router = express.Router();
const StaffController = require('../controller/staff.controller')
const checkToken = require('../validate/checkUser')

router.get('/',checkToken.checkToken, StaffController.getAllStaff)

module.exports = router