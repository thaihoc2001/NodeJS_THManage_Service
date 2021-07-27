const express = require('express')
const router = express.Router();
const registerController = require('../controller/register.controller');

router.post('/staff',registerController.registerStaff);
router.post('/manage',registerController.registerManage);

module.exports = router