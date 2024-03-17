const express = require("express");
const expressJoi = require("@escook/express-joi");
const user_handler = require("../router_handler/user");
const {reg_login_schema} = require("../schema/user");

const router = express.Router();

// 注册
router.post("/reguser", expressJoi(reg_login_schema), user_handler.regUser);

// 登录
router.post("/login", expressJoi(reg_login_schema), user_handler.login);

module.exports = router;