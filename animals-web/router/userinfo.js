const express = require("express");
const userinfo_handle = require("../router_handler/userinfo");

const router = express.Router();

// 获取用户基本信息
router.get('/userinfo', userinfo_handle.getUserInfo);

module.exports = router;