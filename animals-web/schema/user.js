const joi = require("joi");

// 定义用户名和密码的验证规则

const username = joi.string().alphanum().min(2).max(15).required();
const password = joi.string().pattern(/^[\S]{6,20}$/).required();

// 定义和验证注册和登录表单数据的规则对象

exports.reg_login_schema = {
    body: {
        username,
        password
    }
};